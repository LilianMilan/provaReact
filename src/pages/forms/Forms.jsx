import React from 'react'



export default props=>(
    /* <!-- main content start --> */
    <div className="main-content">

      {/* <!-- content --> */}
      <div className="container-fluid content-top-gap">

       {/*  <!-- breadcrumbs --> */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb my-breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Forms</li>
          </ol>
        </nav>
       {/*  <!-- //breadcrumbs -->
        <!-- forms --> */}
        <div className="forms">
        {/*   <!-- forms 1 --> */}
          <div className="card card_border py-2 mb-4">
            <div className="cards__heading">
              <h3>Forms <span></span></h3>
            </div>
            <div className="card-body">
              <form action="#" method="post">
                <div className="form-group">
                  <label for="exampleInputEmail1" className="input__label">Email address</label>
                  <input type="email" className="form-control input-style" id="exampleInputEmail1"
                    aria-describedby="emailHelp" placeholder="Enter email"/>
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                    anyone else.</small>
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1" className="input__label">Password</label>
                  <input type="password" className="form-control input-style" id="exampleInputPassword1"
                    placeholder="Password"/>
                </div>
                <div className="form-check check-remember check-me-out">
                  <input type="checkbox" className="form-check-input checkbox" id="exampleCheck1"/>
                  <label className="form-check-label checkmark" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary btn-style mt-4">Submit</button>
                </form>
           
          </div>
          {/* <!-- //forms 1 -->

          <!-- forms 2 --> */}
          <div className="card card_border py-2 mb-4">
            <div className="card-body">
              <form action="#" method="post">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputEmail4" className="input__label">Email</label>
                    <input type="email" className="form-control input-style" id="inputEmail4" placeholder="Email"/>
                  </div>
                  <div className="form-group col-md-6">
                    <label for="inputPassword4" className="input__label">Password</label>
                    <input type="password" className="form-control input-style" id="inputPassword4" placeholder="Password"/>
                  </div>
                </div>
                <div className="form-group">
                  <label for="inputAddress" className="input__label">Address</label>
                  <input type="text" className="form-control input-style" id="inputAddress" placeholder="1234 Main St"/>
                </div>
                <div className="form-group">
                  <label for="inputAddress2" className="input__label">Address 2</label>
                  <input type="text" className="form-control input-style" id="inputAddress2"
                    placeholder="Apartment, studio, or floor"/>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputCity" className="input__label">City</label>
                    <input type="text" className="form-control input-style" id="inputCity"/>
                  </div>
                  <div className="form-group col-md-4">
                    <label for="inputState" className="input__label">State</label>
                    <select id="inputState" className="form-control input-style">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div className="form-group col-md-2">
                    <label for="inputZip" className="input__label">Zip</label>
                    <input type="text" className="form-control input-style" id="inputZip"/>
                  </div>
                </div>
                <div className="form-check check-remember check-me-out">
                  <input className="form-check-input checkbox" type="checkbox" id="gridCheck"/>
                  <label className="form-check-label checkmark" for="gridCheck">
                    Check me out
                  </label>
                </div>
                <button type="submit" className="btn btn-primary btn-style mt-4">Sign in</button>
            
            </form>
          </div>
        </div>
    </div>
  </div>
  </div>
</div>
)
