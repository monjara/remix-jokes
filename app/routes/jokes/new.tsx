export default function NewJokeRoute() {
  return (
    <div>
      <p>Add your own hilarious joke</p>
      <form action='post'>
        <div>
          <label>
            Name: <input type='text' name='name' />
          </label>
        </div>
        <div>
          <label>
            Content: <textarea name='content' />
          </label>
        </div>
        <div>
          <button type='submit' className='button'>add</button>
        </div>
      </form>
    </div>
  )
}
