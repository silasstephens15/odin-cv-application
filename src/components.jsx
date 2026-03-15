import { useState } from "react";

function BiographicInfo() {
  const [isEditing, setIsEditing] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const changeIsEditing = () => {
    setIsEditing(!isEditing);
  };
  if (isEditing) {
    return (
      <>
        <h2>General Information</h2>
        <form action="">
          <label htmlFor="name">Enter full name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Enter email: </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="phone">Enter phone: </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button onClick={changeIsEditing}>Add</button>
        </form>
      </>
    );
  } else {
    return (
      <div className="card">
        <h3>{name}</h3>
        <address>
          {phone} <br />
          {email}
        </address>
        <button onClick={changeIsEditing}>Edit</button>
      </div>
    );
  }
}

function ExperienceSection() {
  const [isEditing, setIsEditing] = useState(true);
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const changeIsEditing = () => {
    setIsEditing(!isEditing);
  };
  if (isEditing) {
    return (
      <>
        <form action="">
          <label htmlFor="dateStart">Start Date</label>
          <input
            type="date"
            id="dateStart"
            name="dateStart"
            value={dateStart}
            onChange={(e) => setDateStart(e.target.value)}
          />
          <label htmlFor="dateEnd">End date</label>
          <input
            type="date"
            name="dateEnd"
            id="dateEnd"
            value={dateEnd}
            onChange={(e) => setDateEnd(e.target.value)}
          />
          <label htmlFor="jobTitle">Title</label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="description">Description</label>
          <input
            type="textarea"
            id="description"
            name="description"
            placeholder="Enter description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={changeIsEditing}>Add</button>
        </form>
      </>
    );
  } else {
    return (
      <>
        <h3>{title}</h3>
        <p>
          {dateStart} - {dateEnd}
        </p>
        <br />
        <p>{description}</p>
        <button onClick={changeIsEditing}>Edit</button>
      </>
    );
  }
}

function JobSection() {
  const [experiences, setExperiences] = useState([]);
  const addExperience = () => {
    setExperiences((prev) => [...prev, crypto.randomUUID()]);
  };
  const deleteCard = (e) => {
    setExperiences((prev) => {
      return prev.filter((item) => item != e.target.getAttribute("data-key"));
    });
  };
  return (
    <div className="Section">
      <h2>Work Experience</h2>
      {experiences.map((item, index) => (
        <div className="card" key={item}>
          <ExperienceSection data-key={item} />
          <button onClick={deleteCard} data-key={item}>
            Delete
          </button>
        </div>
      ))}
      <button onClick={addExperience}>Add New</button>
    </div>
  );
}

export { BiographicInfo, JobSection };
