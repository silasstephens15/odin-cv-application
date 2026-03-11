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

function ExperienceSection() {
  return (
    <div class="card">
      <h3>Enter Experience</h3>
      <form action="">
        <label htmlFor="dateStart">Start Date</label>
        <input type="date" id="dateStart" name="dateStart" />
        <label htmlFor="dateEnd">End date</label>
        <input type="date" name="dateEnd" id="dateEnd" />
        <label htmlFor="jobTitle">Job Title</label>
        <input type="text" id="jobTitle" name="jobTitle" />
        <label htmlFor="description">Description</label>
        <input
          type="textarea"
          id="description"
          name="description"
          placeholder="Enter description..."
        />
        <button>Add Experience</button>
      </form>
    </div>
  );
}

export { BiographicInfo, ExperienceSection };
