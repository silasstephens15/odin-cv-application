function BiographicInfo() {
  return (
    <>
      <h2>General Information</h2>
      <form action="">
        <label htmlFor="name">Enter full name: </label>
        <input type="text" name="name" id="name" />
        <label htmlFor="email">Enter email: </label>
        <input type="email" name="email" id="email" />
        <label htmlFor="phone">Enter phone: </label>
        <input type="tel" name="phone" id="phone" />
      </form>
    </>
  );
}

export { BiographicInfo };
