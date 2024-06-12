import './App.css'

function App() {

  return (
    <>
      <div className='container'>
        <div className='topbar'>
          <div className='Navbar'>
            <ul>
              <li><a href="#">Product</a></li>
              <li><a href="#">Customers</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">For Agencies</a></li>
              <li><a href="#">For PPC</a></li>
              <li><a href="#">Learn</a></li>
            </ul>

          </div>
        </div>
          <p className='mb-7'>Hello and welcome to my website!!</p>
          <p>In the past I have worked under a web development entrepreneur to enhance my web development skills</p>
          <div className='flex justify-between'>
            <ul>
              <li>
                <p className='mb-3'>hello</p>
                <a href="#">Craft</a>
              </li>
              <li>designer</li>
              <li>programmer</li>
            </ul>
            <ul>
              <li>student</li>
              <li>designer</li>
              <li>programmer</li>
            </ul>
            <ul>
              <li>student</li>
              <li>designer</li>
              <li>programmer</li>
            </ul>
          </div>
      </div>
      <div className='flex items-center justify-center'>
        <div className='text-left w-1/2 margin'>
          <h1 className='mb-7 text-3l'><b>Now</b></h1>
          <p>My name is Corey, and I am a Senior Student located in Cleveland Ohio. Aside from doing schoolwork, I work on web projects, ride my bike, and tinker around on my computer!</p>
        </div>
      </div>
    </>
  )
}

export default App