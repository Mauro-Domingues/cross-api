<h1>cross-api</h1>

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

<h3>IMPORTANT: Declare the names of the modules in lowercase and singular when using</h3>

```
yarn cross make:module [name]
```

<hr>

<h2>Understanding the project and code examples</h2>

<h4>First of all you need to understand what IObjectDTO is, because you will see a lot within the code. </h4>
<hr>
<br>
<h3>IObjectDTO</h3><h4> IObjectDTO is a generic interface that accepts any object with a number between 1 and infinite key and value pairs, you can add more input types according to your need.</h4>

```typescript
interface IObjectDTO {
  [key: string]: string | number | any type you want to add;
};

const simpleKey: IObjectDTO = {
  name: "simple key"
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
const example = await this.examplesRepository.findBy({ id: 123 });

// Find one where id = 123
```

<h4>For queries composed of more than one condition: </h4>

```typescript
const example = await this.examplesRepository.findBy({ id: 123, name: "example" });

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
const example = await this.examplesRepository.findBy({ id: 123 }, ["relation-1", "relation-2"]);

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

const example = await this.examplesRepository.findBy({ id: 123 });

example.name = data.name;
example.description = data.description;

await this.examplesRepository.update(example);
```
<hr>
<br>
<h3>delete</h3><h4> Classic delete, receives as parameter the type IObjectDTO and delete all related data</h4>

```typescript
const example = await this.examplesRepository.findBy({ id: 123 });

if(!example){
  throw new AppError("Example not found")
};

await this.examplesRepository.delete({ id: example.id });
```
<hr>
<br>
<h3>softDelete</h3><h4> Security delete, receives as parameter the IObjectDTO type and invalidates all related data but does not delete</h4>

```typescript
const example = await this.examplesRepository.findBy({ id: 123 });

if(!example){
  throw new AppError("Example not found")
};

await this.examplesRepository.softDelete({ id: example.id });
```
<hr>
<br>
<h3>Next topics: </h3>
<h4>Introduction about mappers</h4>
<h4>Introduction about providers</h4>
<h4>Introduction about api structure</h4>