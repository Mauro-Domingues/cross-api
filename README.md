﻿<h1>cross-api</h1>

<h3> Check an application example at <a href="https://github.com/Mauro-Domingues/social-media-using-cross-api">social-media-using-cross-api@^3.2.4</a>

<hr>

<h3>To install the project:</h3>

```
npm install cross-api --save-dev
```

<h3>Enter the following code in the terminal to make the initial configuration:</h3>

```
npx cross config
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

<h2>Api Structure</h2>

```bash
.
├── src
├── .editorconfig
├── .env
├── .env.template
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── babel.config.js
├── docker-compose.yml
├── jest.config.ts
├── nodemon.json
├── package.json
├── prettier.config.js
├── tsconfig.json
└── yarn.lock
```

<h3>src</h3>
<h4>&nbsp;&nbsp;&nbsp;- It is where the entire structure of the api is located</h4>

```bash
.
└── src
    ├── @types
    ├── assets
    ├── config
    ├── dtos
    ├── middlewares
    ├── modules
    ├── routes
    ├── shared
    └── utils   
```

<h3>@types</h3>
<h4>&nbsp;&nbsp;&nbsp;- It is where the global project typings are declared</h4>

```bash
.
└── @types
    ├── env.d.ts
    ├── express.d.ts
    ├── keys.d.ts
    └── [name].d.ts 
```

<h3>assets</h3>
<h4>&nbsp;&nbsp;&nbsp;- It is where auxiliary files are stored, such as jsons, .txt, keys...</h4>

```bash
.
└── assets
    ├── .well-known
    │   └── jwks.json
    ├── keys
    │   ├── private.pem
    │   └── public.pem
    ├── domains.txt
    └── errors.log   
```

<h3>config</h3>
<h4>&nbsp;&nbsp;&nbsp;- It is where public settings are located in which providers consume</h4>

```bash
.
└── config
    ├── auth.ts
    ├── cache.ts
    ├── cors.ts
    └── [name].ts
```

<h3>dtos</h3>
<h4>&nbsp;&nbsp;&nbsp;- It is where the public interfaces of the project are declared</h4>

```bash
.
└── dtos
    ├── ICacheDTO.ts
    ├── IExceptionDTO.ts
    ├── IListDTO.ts
    ├── IObjectDTO.ts
    ├── IResponseDTO.ts
    └── [name].ts
```

<h3>middlewares</h3>
<h4>&nbsp;&nbsp;&nbsp;- It is where the public project middlewares are declared</h4>

```bash
.
└── middlewares
    ├── ensureAuthenticated.ts
    ├── parseParam.ts
    ├── rateLimiter.ts
    └── [name].ts
```

<h3>modules</h3>
<h4>&nbsp;&nbsp;&nbsp;- It is where private dtos/entities/repositories/private providers/controllers/services and unit tests of each module are located</h4>

```bash
.
└── modules
    └── [name]
        ├── dtos
        │   └── IEntityDTO.ts
        ├── entities
        │   └── Entity.ts
        ├── providers
        │   ├── [name]
        │   │   ├── dtos
        │   │   ├── fakes
        │   │   ├── implementations
        │   │   ├── models
        │   │   └── index.ts
        │   └── index.ts
        ├── repositories
        │   ├── fakes
        │   │   └── FakeRepository.ts
        │   ├── Repository.ts
        │   └── IRepository.ts
        └── services
            └── [service]
                ├── Controller.spec.ts
                ├── Controller.ts
                ├── Service.spec.ts
                └── Service.ts
```

<h3>routes</h3>
<h4>&nbsp;&nbsp;&nbsp;- It is where the routes are located</h4>

```bash
.
└── routes
    ├── guardRouter.ts
    ├── index.ts
    └── [name].ts 
```

<h3>shared</h3>
<h4>&nbsp;&nbsp;&nbsp;- It is where public modules/providers/error handlers/connection configuration/app and server are located</h4>

```bash
.
└── shared
    ├── container
    │   ├── modules
    │   │   ├── entities
    │   │   │    └── Entity.ts
    │   │   └── repositories
    │   │       ├── fakes
    │   │       │   └── FakeBaseRepository.ts
    │   │       ├── BaseRepository.ts
    │   │       └── IBaseRepository.ts
    │   ├── providers
    │   │   ├── [name]
    │   │   │   ├── dtos
    │   │   │   │   └── IProviderDTO.ts
    │   │   │   ├── fakes
    │   │   │   │   └── FakeImplementation.ts
    │   │   │   ├── implementations
    │   │   │   │   └── Implementation.ts
    │   │   │   ├── models
    │   │   │   │   └── IProvider.ts
    │   │   │   └── index.ts
    │   │   └── index.ts
    │   └── index.ts
    ├── errors
    │   └── AppError.ts
    ├── typeorm
    │   ├── migrations
    │   │   └── hash.default.ts
    │   ├── seeds
    │   │   └── [name].ts
    │   ├── dataSources
    │   │   ├── fakes
    │   │   │   └── FakeDataSource.ts
    │   │   ├── mysqlDataSource.ts
    │   │   └── [name]DataSource.ts
    │   └── index.ts
    ├── app.ts
    └── server.ts
```

<h3>utils</h3>
<h4>&nbsp;&nbsp;&nbsp;- It is where useful tools for various use cases are stored</h4>

```bash
.
└── utils
    ├── mappers
    │   ├── mapAndCloneAttribute.ts
    │   ├── mapAndInsertAttribute.ts
    │   ├── mapAndPatchAttribute.ts
    │   ├── mapAndPatchAttribute.ts
    │   ├── mapAndPatchString.ts
    │   ├── mapAndUpdateAttribute.ts
    │   ├── mapAndUpdateString.ts
    │   └── index.ts
    ├── decimalAdjust.ts
    ├── domainsManager.ts
    ├── errorLog.ts
    └── normalizeQueryLink.ts   
```

<hr>
<br>
<h2>Understanding the project and code examples</h2>
<h3>Transactions</h3><h4> By introducing the transactions, they revert all changes made to the database in the event that the method fails to execute. This helps prevent traces of data considered junk.</h4>

```typescript
import { Connection } from '@shared/typeorm';

class Example {
  public async handle() {
    const trx = Connection.mysql.createQueryRunner(); // Creates a queryRunner

    await trx.startTransaction(); // Creates a single connection to the database
    try {
      
      const result = await this.examplesRepository.create({ name: 'example' }, trx); // The trx object is mandatory if there is a connection to a database but optional if you are using "in memory repositories"

      if (trx.isTransactionActive) await trx.commitTransaction(); // Use after all the logic and before the method returns to persist modifications to the database

      return result;
    } catch (error: unknown) {
      if (trx.isTransactionActive) await trx.rollbackTransaction(); // In case of execution failure rolls back all changes made to the database
      throw error;
    } finally {
      await trx.release(); // Releases the connection so it can be used in other cases
    }
  }
}

```

<h4>There are 13 types of standard queries for all modules, they are fully dynamic so they will respond to 90% of your needs. They are:</h4>
<hr>
<br>
<h3>exists</h3><h4> Receives any parameter as an argument as long as it is a { key: value } or array of { key: value }, check if an entity exists in the database</h4>

```typescript
const example = await this.examplesRepository.exists(
  { where: { id: 123 } },
  trx,
);

// Find one where id = 123 and return a boolean
```
<hr>
<br>
<h3>findBy</h3><h4> Receives any parameter as an argument as long as it is a { key: value } or array of { key: value }</h4>

<h4>For simple queries: </h4>

```typescript
const example = await this.examplesRepository.findBy(
  { where: { id: 123 } },
  trx,
);

// Find one where id = 123
```

<h4>For queries composed of more than one condition: </h4>

```typescript
const example = await this.examplesRepository.findBy(
  { where: { id: 123, name: "example" } },
  trx,
);

// Find one where id = 123 AND name = "example"
```

<h4>For queries composed of one condition or another: </h4>

```typescript
const example = await this.examplesRepository.findBy(
  {
    where: [
      { id: 123 },
      { name: "example" },
    ],
  },
  trx,
);

/** Find one where id = 123 OR name = "example"
 * You also can use a mapper to make your work easier and cleaner
 * there will be an introduction about them right under the standard queries introduction
 */
```

<h4>In addition, it can be passed as array of string keys of relations that you want to load and the fields you want to select: </h4>

```typescript
const select = { name: true }

const example = await this.examplesRepository.findBy(
  {
    where: { id: 123 },
    relations: ["relation-1", "relation-2"], // or { "relation-1": true, "relation-2": true }
    select,
  },
  trx,
);

// Find one where id = 123 and load related relation-1 and relation-2 entities
```
<hr>
<br>
<h3>findIn</h3><h4> Exactly the same functionality as findBy, but search for entities in an interval of values. The return is an array of the entity. Full Example:</h4>

```typescript
const propertyName = { id : 'id' };
const baseData = [3, 4, 6, 7, 8, 9];
const select = { name: true }

const exampleArray = await this.examplesRepository.findIn(
  {
    where: { id: [3, 4, 6, 7, 8, 9] },
    relations: ["relation-1", "relation-2"], // or { "relation-1": true, "relation-2": true }
    order: { id: 'ASC' },
    select,
  },
  trx,
);

// Find all and select name where id in = "3, 4, 6, 7, 8, 9"

output: [exampleArray]
```
<hr>
<br>
<h3>findLike</h3><h4> Exactly the same functionality as findBy, but search for entities using Like clause. The return is an array of the entity. Full Example:</h4>

```typescript
const where = { name: '%example%' };
const select = { name: true, id: true };
const order = { name: 'ASC' } // options = "ASC" | "DESC" | "asc" | "desc"
const limit = 10

const exampleArray = await this.examplesRepository.findLike(
  {
    where,
    order,
    select,
    limit
  }
  trx,
);

// Find all and select name where name has 'example'

output: [exampleArray]
```
<hr>
<br>
<h3>findAll</h3><h4> Exactly the same functionality as findBy, but also receiving paging and limiting. The return is an array of the entity and the amount of items returned, filtering options follow the same rule as findBy receiving a { key: value } or array of { key: value }. Full Example:</h4>

```typescript
const page = 3;
const limit = 500;
const select = { name: true }

const exampleArray = await this.examplesRepository.findAll(
  {
    page,
    limit,
    where: { name: "example" },
    ["relation-1", "relation-2.nested-relation"] // or { "relation-1": true, "relation-2": { nested-relation: true } }
    order: { id: 'ASC' },
    select,
  },
  trx,
);

/** Find all where name = "example"
 * Select name only
 * Filter where index is between 1000 and 1500
 * Load their relations (use . to load nested relations)
 * Count the amount of items
 * sorts the result from the lowest value to the highest value
 */

output: { examples: [exampleArray], amount: 500 }
```
<hr>
<br>
<h3>create</h3><h4> Classic create, receives as parameter the type of IEntityDTO</h4>

```typescript
data: IExampleDTO;

const example = await this.examplesRepository.create(data, trx);
```
<hr>
<br>
<h3>createMany</h3><h4> Classic create, receives as parameter the type of Array<IEntityDTO> and execute multiple queries at once</h4>

```typescript
data: Array<IExampleDTO>;

const examples = await this.examplesRepository.createMany(data, trx);
```
<hr>
<br>
<h3>update</h3><h4> Classic update, receives as parameter the type of entity to be updated and can be used with a mapper</h4>

```typescript
data: IExampleDTO;

const example = await this.examplesRepository.findBy(
  { where: { id: 123 } },
  trx,
);

example.name = data.name;
example.description = data.description;

await this.examplesRepository.update(example, trx);
```
<hr>
<br>
<h3>updateMany</h3><h4> Classic update, receives as parameter the type of Array<IEntityDTO> and execute multiple queries at once</h4>

```typescript
data: Array<IExampleDTO>;

const examples = await this.examplesRepository.findBy(
  { where: { name: 'example' } },
  trx,
);

const examplesToUpdate = examples.map(example => {
  return {
    ...example,
    name: data.name,
    description: data.description;
  }
})

await this.examplesRepository.update(examplesToUpdate, trx);
```
<hr>
<br>
<h3>delete</h3><h4> Classic delete, receives as parameter the type of the entity to delete it or a { key: value } to delete all related data</h4>

```typescript
const example = await this.examplesRepository.findBy(
  { where: { id: 123 } },
  trx,
);

if (!example) {
  throw new AppError("Example not found");
};

await this.examplesRepository.delete({ id: example.id }, trx);

// delete example
```

```typescript
await this.examplesRepository.delete({ name: "example" }, trx);

// delete all where name = example
```
<hr>
<br>
<h3>deleteMany</h3><h4> Classic delete, receives as parameter the type of the Array<entity> to delete it or a Array<{ key: value }> and execute multiple queries at once</h4>

```typescript
await this.examplesRepository.deleteMany(
  [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ],
  trx,
);

// delete example
```
<hr>
<br>
<h3>softDelete</h3><h4> Security delete, receives as parameter the type of the entity to invalidate it or a { key: value } type and invalidates all related data (does not delete them)</h4>

```typescript
const example = await this.examplesRepository.findBy(
  { where: { id: 123 } },
  trx,
);

if (!example) {
  throw new AppError("Example not found");
};

await this.examplesRepository.softDelete({ id: example.id }, trx);

// invalidate example
```

```typescript
await this.examplesRepository.softDelete({ name: "example" }, trx);

// invalidate all where name = example
```
<hr>
<br>
<h3>softDeleteMany</h3><h4> Security delete, receives as parameter the type of the Array<entity> to delete it or a Array<{ key: value }> and execute multiple queries at once</h4>

```typescript
await this.examplesRepository.softDeleteMany(
  [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ],
  trx,
);

// delete example
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

const param: FindOptionsWhere<Example> = {
  key: "example",
};

const example = await this.examplesRepository.findBy(
  { 
    where: [
      { id: key },
      { name: key },
      {description: key},
    ]
  },
  trx,
);

// Find where id = key OR name = key OR description = key
```

```typescript
// using mapper

import { cloneAttribute } from "@utils/mappers";

const param: FindOptionsWhere<Example> = {
  key: "example",
};

const example = await this.examplesRepository.findBy(
  {
    where: cloneAttribute(param, ['id', 'name', 'description']),
  },
  trx,
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

await this.examplesRepository.update(
  {
    name: inputData.name,
    description: inputData.name, // Possible human error
    extra: inputData.extra,
    size: inputData.size,
    price: inputData.price,
  },
  trx,
);

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

import { updateAttribute } from "@utils/mappers";

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
  updateAttribute(example, inputData),
  trx,
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

await this.examplesRepository.update(example, trx);

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

import { patchAttribute } from "@utils/mappers";

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
  patchAttribute(example, inputData),
  trx,
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

await this.examplesRepository.update(
  {
    ...example,
    data: JSON.stringify(updatedData),
  },
  trx,
);

output => example.data = "{\"name\": \"\",\"description\": \"this is a new description\",\"extra\": \"this is an extra\",\"size\": \"\", \"price\": 20}";
```

```typescript
// with mapper

import { updateString } from "@utils/mappers";

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

await this.examplesRepository.update(
  {
    ...example,
    data: updateString(example.data, inputData),
  },
  trx,
);

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

await this.examplesRepository.update(
  {
    ...example,
    data: JSON.stringify(updatedData),
  },
  trx,
);

output => example.data = "{\"name\": \"example\",\"description\": \"this is a new description\",\"extra\": \"this is an extra\",\"size\": \"123\", \"price\": 20}";
```

```typescript
// with mapper

import { patchString } from "@utils/mappers";

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

await this.examplesRepository.update(
  {
    ...example,
    data: patchString(example.data, inputData),
  },
  trx,
);

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

await this.examplesRepository.update(
  {
    ...example,
    nonEntityFieldSent_1: inputData.nonEntityFieldSent_1,
    nonEntityFieldSent_2: inputData.nonEntityFieldSent_2,
    nonEntityFieldSent_3: inputData.nonEntityFieldSent_3,
    nonEntityFieldSent_4: inputData.nonEntityFieldSent_4,
  },
  trx,
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

```typescript
// with mapper

import { insertAttribute } from '@utils/mappers';

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
  insertAttribute(example, inputData),
  trx,
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
<hr>