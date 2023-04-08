﻿<h1>cross-api</h1>

<h3> Check an application example at <a href="https://github.com/Mauro-Domingues/social-media-api-using-cross-api">social-media-api-using-cross-api</a>

<hr>

<h3>To install the project:</h3>

```
npm install cross-api --save-dev
```

<h3>Enter the following code in the terminal to make the initial configuration:</h3>

```
npm cross config
```

<h3>It will install yarn globally so to see the available commands type:</h3>

```
yarn cross comands
```

<h3>IMPORTANT: Declare the names of the modules in camelCase</h3>

```
yarn cross make:module [name]
```

<hr>
<br>
<h2>Understanding the project and code examples</h2>

<h3>IObjectDTO</h3><h4> First of all you need to understand what IObjectDTO is, because you will see a lot within the code. IObjectDTO is a generic interface that accepts any object with a number between 1 and infinite key and value pairs</h4>

```typescript
interface IObjectDTO {
  [key: string]: unknown;
};

const simpleKey: IObjectDTO = {
  name: "simple key",
}; // This matches with IObjectDTO

const multiKey: IObjectDTO = {
  name: "multiple keys",
  description: "this also matches with IObjectDTO",
};

const multiKeyAndNumber: IObjectDTO = {
  name: "multiple keys and numbers",
  description: "this also matches with IObjectDTO",
  index: 123,
};

```
<h4>Understanding IObjectDTO interface there are 6 types of standard queries for all modules, they are fully dynamic so they will respond to 90% of your needs. They are:</h4>
<hr>
<br>
<h3>findBy</h3><h4> Receives any parameter as an argument as long as it is an IObjectDTO or array of IObjectDTO</h4>

<h4>For simple queries: </h4>

```typescript
const example = await this.examplesRepository.findBy(
  { id: 123 },
);

// Find one where id = 123
```

<h4>For queries composed of more than one condition: </h4>

```typescript
const example = await this.examplesRepository.findBy(
  { id: 123, name: "example" },
);

// Find one where id = 123 AND name = "example"
```

<h4>For queries composed of one condition or another: </h4>

```typescript
const example = await this.examplesRepository.findBy([
  { id: 123 },
  { name: "example" },
]);

/** Find one where id = 123 OR name = "example"
 * You also can use a mapper to make your work easier and cleaner
 * there will be an introduction about them right under the standard queries introduction
 */
```

<h4>In addition, it can be passed as array of string keys of relations that you want to load: </h4>

```typescript
const example = await this.examplesRepository.findBy(
  { id: 123 },
  ["relation-1", "relation-2"],
);

// Find one where id = 123 and load related relation-1 and relation-2 entities
```
<hr>
<br>
<h3>findAll</h3><h4> Exactly the same functionality as findBy, but also receiving paging and limiting. The return is an array of the entity and the amount of items returned, filtering options follow the same rule as findBy receiving an IObjectDTO or array of IObjectDTO. Full Example:</h4>

```typescript
const page = 3;
const limit = 500;

const exampleArray = await this.examplesRepository.findAll(
  page,
  limit,
  { name: "example" },
  ["relation-1", "relation-2"]
);

/** Find all where name = "example"
 * Filter where index is between 1000 and 1500
 * Load their relations
 * Count the amount of items
 */

output: { examples: [exampleArray], amount: 500 }
```
<hr>
<br>
<h3>create</h3><h4> Classic create, receives as parameter the type of IEntityDTO</h4>

```typescript
data: IExampleDTO;

const example = await this.examplesRepository.create(data);
```
<hr>
<br>
<h3>update</h3><h4> Classic update, receives as parameter the type of entity to be updated and can be used with a mapper</h4>

```typescript
data: IExampleDTO;

const example = await this.examplesRepository.findBy(
  { id: 123 },
);

example.name = data.name;
example.description = data.description;

await this.examplesRepository.update(example);
```
<hr>
<br>
<h3>delete</h3><h4> Classic delete, receives as parameter the type of the entity to delete it or an IObjectDTO to delete all related data</h4>

```typescript
const example = await this.examplesRepository.findBy(
  { id: 123 },
);

if (!example) {
  throw new AppError("Example not found");
};

await this.examplesRepository.delete(example);

// delete example
```

```typescript
await this.examplesRepository.delete({ name: "example" });

// delete all where name = example
```
<hr>
<br>
<h3>softDelete</h3><h4> Security delete, receives as parameter the type of the entity to invalidate it or an IObjectDTO type and invalidates all related data (does not delete them)</h4>

```typescript
const example = await this.examplesRepository.findBy(
  { id: 123 },
);

if (!example) {
  throw new AppError("Example not found");
};

await this.examplesRepository.softDelete(example);

// invalidate example
```

```typescript
await this.examplesRepository.softDelete({ name: "example" });

// invalidate all where name = example
```
<hr>
<br>
<h2>Mappers</h2>
<h4>Mappers are tools that interpret objects for the purpose of simplifying work and making code smaller and cleaner without losing its functionality and also avoid possible human errors in addition to malformed requests. All of them have dynamic typing, they are:</h4>
<hr>
<br>
<h3>mapAndCloneAttribute</h3><h4>Receives as parameter a string array and another object of type { [key: string]: string }, returns an array of objects with the same value, is useful for queries find WHERE + OR</h4>

```typescript
// no mapper

const param: IObjectDTO = {
  key: "example",
};

const example = await this.examplesRepository.findBy([
  { id: key },
  { name: key },
  {description: key},
]);

// Find where id = key OR name = key OR description = key
```

```typescript
// using mapper

import { mapAndCloneAttribute } from "@utils/mappers/mapAndCloneAttribute";

const param: IObjectDTO = {
  key: "example",
};

const example = await this.examplesRepository.findBy(
  await mapAndCloneAttribute(param, [
    "id", "name", "description",
  ]),
);

// Find where id = key OR name = key OR description = key
```
<hr>
<br>
<h3>mapAndUpdateAttribute</h3><h4>Takes as a parameter an entity and an object, maps the object and returns the entity with the updated properties. Considers empty values sent, but non-entity-type properties are discarded</h4>

```typescript
// no mapper

const example: Example = {
  name: "example",
  description: "this is an example",
  extra: undefined,
  size: "123",
  price: 100,
};

const inputData: IExampleDTO = {
  name: undefined,
  description: "this is a new description",
  extra: "this is an extra",
  size: undefined,
  price: 20,
};

await this.examplesRepository.update({
  name: inputData.name,
  description: inputData.name, // Possible human error
  extra: inputData.extra,
  size: inputData.size,
  price: inputData.price,
});

output = {
  name: "",
  description: "",
  extra: "this is an extra",
  size: "",
  price: 20,
};
```

```typescript
// with mapper

import { mapAndUpdateAttribute } from "@utils/mappers/mapAndUpdateAttribute";

const example: Example = {
  name: "example",
  description: "this is an example",
  extra: undefined,
  size: "123",
  price: 100,
};

const inputData: IExampleDTO = {
  name: undefined,
  description: "this is a new description",
  extra: "this is an extra",
  size: undefined,
  price: 20,
  nonEntityFieldSent_1: "1", // It also prevents against non-related inputs
  nonEntityFieldSent_2: "2",
  nonEntityFieldSent_3: "3",
  nonEntityFieldSent_4: "4",
};

await this.examplesRepository.update(
  await mapAndUpdateAttribute(example, inputData),
);

output = {
  name: "",
  description: "this is a new description",
  extra: "this is an extra",
  size: "",
  price: 20,
};
```
<hr>
<br>
<h3>mapAndPatchAttribute</h3><h4>Takes as parameter an entity and an object, maps the object, and returns the entity with the patched properties. Empty or non-entity-type properties are discarded</h4>

```typescript
// no mapper

const example: Example = {
  name: "example",
  description: "this is an example",
  extra: undefined,
  size: "123",
  price: 100,
};

const inputData: IExampleDTO = {
  name: undefined,
  description: "this is a new description",
  extra: "this is an extra",
  size: undefined,
  price: 20,
};

if (inputData.name) {
  example.name = inputData.name;
}
if (inputData.description) {
  example.description = inputData.description;
}
if (inputData.extra) {
  example.extra = inputData.extra;
}
if (inputData.size) {
  example.size = inputData.size;
}
if (inputData.price) {
  example.price = inputData.price;
}

await this.examplesRepository.update(example);

output = {
  name: "example",
  description: "this is a new description",
  extra: "this is an extra",
  size: "123",
  price: 20,
};
```

```typescript
// with mapper

import { mapAndPatchAttribute } from "@utils/mappers/mapAndPatchAttribute";

const example: Example = {
  name: "example",
  description: "this is an example",
  extra: undefined,
  size: "123",
  price: 100,
};

const inputData: IExampleDTO = {
  name: undefined,
  description: "this is a new description",
  extra: "this is an extra",
  size: undefined,
  price: 20,
  nonEntityFieldSent_1: "1", // It also prevents against non-related inputs
  nonEntityFieldSent_2: "2",
  nonEntityFieldSent_3: "3",
  nonEntityFieldSent_4: "4",
};

await this.examplesRepository.update(
  await mapAndPatchAttribute(example, inputData),
);

output = {
  name: "example",
  description: "this is a new description",
  extra: "this is an extra",
  size: "123",
  price: 20,
};
```
<hr>
<br>
<h3>mapAndUpdateString</h3><h4>Takes as parameter a stringified object and another object, converts, maps, and returns the stringified object with the updated properties. Considers empty values sent, but non-entity-type properties are discarded</h4>

```typescript
// no mapper

const example: Example = {
  data: "{\"name\": \"example\",\"description\": \"this is an example\",\"extra\": \"\",\"size\": \"123\", \"price\": 100}",
}

const inputData: IExampleDTO = {
  name: undefined,
  description: "this is a new description",
  extra: "this is an extra",
  size: undefined,
  price: 20,
};

const updatedData = JSON.parse(example.data)

updatedData.name = inputData.name,
updatedData.description = inputData.description,
updatedData.extra = inputData.extra,
updatedData.size = inputData.size,
updatedData.price = inputData.price,

await this.examplesRepository.update({
  ...example,
  data: JSON.stringify(updatedData),
});

output => example.data = "{\"name\": \"\",\"description\": \"this is a new description\",\"extra\": \"this is an extra\",\"size\": \"\", \"price\": 20}";
```

```typescript
// with mapper

import { mapAndUpdateString } from "@utils/mappers/mapAndUpdateString";

const example: Example = {
  data: "{\"name\": \"example\",\"description\": \"this is an example\",\"extra\": \"\",\"size\": \"123\", \"price\": 100}",
}

const inputData: IExampleDTO = {
  name: undefined,
  description: "this is a new description",
  extra: "this is an extra",
  size: undefined,
  price: 20,
};

await this.examplesRepository.update({
  ...example,
  data: await mapAndUpdateString(example.data, inputData),
});

output => example.data = "{\"name\": \"\",\"description\": \"this is a new description\",\"extra\": \"this is an extra\",\"size\": \"\", \"price\": 20}"
```
<hr>
<br>
<h3>mapAndPatchString</h3><h4>Takes as parameter a stringified object and another object, converts, maps, and returns the stringified object with the patched properties. Empty or non-entity-type properties are discarded</h4>

```typescript
// no mapper

const example: Example = {
  data: "{\"name\": \"example\",\"description\": \"this is an example\",\"extra\": \"\",\"size\": \"123\", \"price\": 100}",
};

const inputData: IExampleDTO = {
  name: undefined,
  description: "this is a new description",
  extra: "this is an extra",
  size: undefined,
  price: 20,
};

const updatedData = JSON.parse(example.data);

if (inputData.name) {
  updatedData.name = inputData.name;
}
if (inputData.description) {
  updatedData.description = inputData.description;
}
if (inputData.extra) {
  updatedData.extra = inputData.extra;
}
if (inputData.size) {
  updatedData.size = inputData.size;
}
if (inputData.price) {
  updatedData.price = inputData.price;
}

await this.examplesRepository.update({
  ...example,
  data: JSON.stringify(updatedData),
});

output => example.data = "{\"name\": \"example\",\"description\": \"this is a new description\",\"extra\": \"this is an extra\",\"size\": \"123\", \"price\": 20}";
```

```typescript
// with mapper

import { mapAndPatchString } from "@utils/mappers/mapAndPatchString";

const example: Example = {
  data: "{\"name\": \"example\",\"description\": \"this is an example\",\"extra\": \"\",\"size\": \"123\", \"price\": 100}",
}

const inputData: IExampleDTO = {
  name: undefined,
  description: "this is a new description",
  extra: "this is an extra",
  size: undefined,
  price: 20,
};

await this.examplesRepository.update({
  ...example,
  data: await mapAndPatchString(example.data, inputData),
});

output => example.data = "{\"name\": \"example\",\"description\": \"this is a new description\",\"extra\": \"this is an extra\",\"size\": \"123\", \"price\": 20}";
```
<hr>
<br>
<h3>mapAndInsertAttribute</h3><h4>Takes as a parameter an entity and an object, maps the object and returns the entity with the patched properties. Considers non-entity-type properties but empty values sent are discarded</h4>

```typescript
// no mapper

const example: Example = {
  name: "example",
  description: "this is an example",
  extra: undefined,
  size: "123",
  price: 100,
};

const inputData: IExampleDTO = {
  name: undefined,
  description: "this is a new description",
  extra: "this is an extra",
  size: undefined,
  price: 20,
  nonEntityFieldSent_1: "1",
  nonEntityFieldSent_2: "2",
  nonEntityFieldSent_3: "3",
  nonEntityFieldSent_4: "4",
};

if (inputData.name) {
  example.name = inputData.name;
}
if (inputData.description) {
  example.description = inputData.description;
}
if (inputData.extra) {
  example.extra = inputData.extra;
}
if (inputData.size) {
  example.size = inputData.size;
}
if (inputData.price) {
  example.price = inputData.price;
}

await this.examplesRepository.update({
  ...example,
  nonEntityFieldSent_1: inputData.nonEntityFieldSent_1,
  nonEntityFieldSent_2: inputData.nonEntityFieldSent_2,
  nonEntityFieldSent_3: inputData.nonEntityFieldSent_3,
  nonEntityFieldSent_4: inputData.nonEntityFieldSent_4,
});

output = {
  name: "example",
  description: "this is a new description",
  extra: "this is an extra",
  size: "123",
  price: 20,
  nonEntityFieldSent_1: "1",
  nonEntityFieldSent_2: "2",
  nonEntityFieldSent_3: "3",
  nonEntityFieldSent_4: "4",
};
```

```typescript
// with mapper

import { mapAndInsertAttribute } from '@utils/mappers/mapAndInsertAttribute';

const example: Example = {
  name: "example",
  description: "this is an example",
  extra: undefined,
  size: "123",
  price: 100,
};

const inputData: IExampleDTO = {
  name: undefined,
  description: "this is a new description",
  extra: "this is an extra",
  size: undefined,
  price: 20,
  nonEntityFieldSent_1: "1",
  nonEntityFieldSent_2: "2",
  nonEntityFieldSent_3: "3",
  nonEntityFieldSent_4: "4",
};

await this.examplesRepository.update(
  await mapAndInsertAttribute(example, inputData),
);

output = {
  name: "example",
  description: "this is a new description",
  extra: "this is an extra",
  size: "123",
  price: 20,
  nonEntityFieldSent_1: "1",
  nonEntityFieldSent_2: "2",
  nonEntityFieldSent_3: "3",
  nonEntityFieldSent_4: "4",
};
```
<hr>
<br>
<h2>Providers</h2>
<h4>Providers are implementations of services that assist in the business rules of your project, such as storage providers, sending messages, leads... By default, they are created within the "src/shared/containers" directory, where they act as public and independent services, but can also be generated within the modules in "src/modules/[name]/providers". They can contain one or more implementations, you decide which one to use, to switch between them just change the key in .env</h4>
<h3>Payment providers coming soon!</h3>
<hr>
<br>
<h2>Api Structure</h2>
<h3>src</h3>
<h4>&nbsp;&nbsp;&nbsp;- It is where the entire structure of the api is located</h4>
<h3>@types</h3>
<h4>&nbsp;&nbsp;&nbsp;- It is where the global project typings are declared</h4>
<h3>assets</h3>
<h4>&nbsp;&nbsp;&nbsp;- It is where auxiliary files are stored, such as jsons, .txt, images...</h4>
<h3>config</h3>
<h4>&nbsp;&nbsp;&nbsp;- It is where public settings are located in which providers consume</h4>
<h3>dtos</h3>
<h4>&nbsp;&nbsp;&nbsp;- It is where the public interfaces of the project are declared</h4>
<h3>middlewares</h3>
<h4>&nbsp;&nbsp;&nbsp;- It is where the public project middlewares are declared</h4>
<h3>modules</h3>
<h4>&nbsp;&nbsp;&nbsp;- It is where private dtos/entities/repositories/private providers/private middlewares/controllers/services and unit tests of each module are located</h4>
<h3>routes</h3>
<h4>&nbsp;&nbsp;&nbsp;- It is where the routes are located</h4>
<h3>shared</h3>
<h4>&nbsp;&nbsp;&nbsp;- It is where public providers/error handlers/connection configuration/app and server are located</h4>
<h3>utils</h3>
<h4>&nbsp;&nbsp;&nbsp;- It is where useful tools for various use cases are stored</h4>
<hr>