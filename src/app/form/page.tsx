import { Checkbox } from "./checkbox";

async function toggle(data: boolean) {
  "use server";
  console.log({ data });
}

let condition = false;

async function form(data: FormData) {
  "use server";
  const name = data.get("name")?.valueOf();
  const email = data.get("email")?.valueOf();

  if (condition) {
    throw new Error("Name or Email is undefined");
  }

  console.log({ name, email });
}

export default function Page() {
  return (
    <div>
      <h1>Form</h1>
      <Checkbox toggle={toggle} />
      <form
        action={form}
        //  method="PUT"
      >
        <label htmlFor="name">Name</label>

        <input
          className="border-sky-500 border-2 rounded"
          type="text"
          id="name"
          name="name"
        />

        <label htmlFor="email">Email</label>
        <input
          className="border-sky-500 border-2 rounded"
          id="email"
          name="email"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
