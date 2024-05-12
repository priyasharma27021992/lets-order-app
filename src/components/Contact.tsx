const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
      <form className="flex flex-col" action="">
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="message"
        />
        <button type="button" className="border border-black p-2 m-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
