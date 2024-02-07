const SignUpForm = () => {
  return (
    <>
      <h1>SignUpForm</h1>
      <form>
        <label>Name</label>
        <input type="text" value={""} name="" />

        <label>Email</label>
        <input type="email" value={""} name="" />

        <label>Password</label>
        <input type="password" value={""} name="" />
        
        <label>Confirm Password</label>
        <input type="password" value={""} name="" />
      </form>
    </>
  )
}
