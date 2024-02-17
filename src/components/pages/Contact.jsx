export default function Contact() {
  return (
    <>
    <div className="contact">
      <form>
        <label for="name">name</label>
        <input type="text" id="name" name="name"></input>
        <label for="email">email</label>
        <input type="email" id="email" name="email"></input>
        <label for="message">message</label>
        <textarea type="text" rows="5" cols="35" id="message" name="message"></textarea>
      </form>
    </div>
    </>
  )
}