export default function ExpenseForm() {
  return (
    <div className='card w-96 bg-primary text-primary-content m-auto my-4'>
      <div className='card-body'>
        <h2 className='card-title'>Card title!</h2>
        <form>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input type='text' placeholder='email' className='input input-bordered' />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Password</span>
            </label>
            <input type='password' placeholder='password' className='input input-bordered' />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Password</span>
            </label>
            <input type='password' placeholder='password' className='input input-bordered' />
          </div>
        </form>
      </div>
    </div>
  );
}
