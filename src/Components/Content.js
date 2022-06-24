import React from 'react';

  function Content() {
    return (
       <div>
         <section class="">
              <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                     <img class="d-block w-100" src="Images/2.png" alt="First slide" style={{height:"auto"}}/>
                  </div>
                  <div class="carousel-item">
                     <img class="d-block w-100 " src="Images/1.png" alt="Second slide" style={{height:"auto"}}/>
                  </div>
                </div>
               </div>
        </section>   

        <section class="bg-light" id="about">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12">
                 <h3 class="text-center mt-4 text-secondary">Know about us</h3>
               </div>
              </div>
             <div class="row">
                <p class="mt-4 mb-5">We believe books have the capacity to change the way people see themselves, each other, and the world. 
                Pheonix Club fosters deep connections between readers and authors. We aim to
                 creating a fun space which provides books and excting competions with price money and a chance to publish your OWN book!</p>
             </div>   
          </div>   
        </section>   

        <section class="" id="books">   
         <div class="container">
             <div class="row">
              <div class="col-sm-12 col-md-12">
                 <h3 class="text-center mt-4 text-secondary">Books of the month</h3>
               </div>
              </div>
              <div class="row">
                 <div class="col-sm-4 mb-5">
                    <div class="card mt-4">
                       <img class="card-img-top" src="Images/3.jpg" alt=""/>
                       <div class="card-body">
                          <h4 class="card-title text-secondary">Memory</h4>
                          <p class="card-text text-secondary">Author: Angelina Aludo. Price: $8</p>
                       </div>
                       <div class="card-footer">
                          <a href="#" class="btn btn-danger">Add to Cart</a>
                       </div>
                    </div>
                 </div>
                 <div class="col-sm-4 mb-5">
                    <div class="card mt-4">
                       <img class="card-img-top" src="Images/4.jpg" alt=""/>
                       <div class="card-body">
                          <h4 class="card-title text-secondary">The king of drugs</h4>
                          <p class="card-text text-secondary">Author: Nora Barret. Price: $10 (Hard Cover)</p>
                       </div>
                       <div class="card-footer">
                          <a href="#" class="btn btn-danger">Add to Cart</a>
                       </div>
                    </div>
                 </div>
                 <div class="col-sm-4 mb-5">
                    <div class="card mt-4">
                       <img class="card-img-top" src="Images/5.jpeg" alt=""/>
                       <div class="card-body">
                          <h4 class="card-title text-secondary">Crack the code</h4>
                          <p class="card-text text-secondary">Author: Patrick C.Harless. Price: $9</p>
                       </div>
                       <div class="card-footer">
                          <a href="#" class="btn btn-danger">Add to Cart</a>
                       </div>
                    </div>
                 </div>
              </div>
        </div>
       </section>  

       <section class="bg-light mt-5" id="competition">    
     <div class="container">
      <div class="row text-center">
        <div class="col-sm-12 col-md-12 mb-4">
            <h3 class="text-center mt-4 text-secondary">Competitions</h3>
         </div>
        <div class="col-md-4">
          <div class="testimonial mb-5">
           <div class="avatar mx-auto">
            <img src="https://cdn.dribbble.com/users/24158/screenshots/15858017/media/2d738531d149932d6a0f321b70734ca4.jpg?compress=1&resize=768x576&vertical=top" class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">Short Story Writing</h4>
          <h6 class="font-weight-bold blue-text my-3">Competition 1</h6>
          <p class="font-weight-normal dark-grey-text">
            LIVE NOW! 
            DEADLINE: 30TH JUNE.</p>
        
        </div>
      </div>

      <div class="col-md-4">
        <div class="testimonial mb-5">
          <div class="avatar mx-auto">
            <img src="https://cdn.dribbble.com/users/24158/screenshots/17101273/media/e1818cd15dd28798769a53b4543f7f66.jpg?compress=1&resize=768x576&vertical=top" class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">Book Illustration</h4>
          <h6 class="font-weight-bold blue-text my-3">Competition 2</h6>
          <p class="font-weight-normal dark-grey-text">STARTING: 1ST JULY. DEADLINE: 20TH JULY.</p>
        </div>
        <p class="text-center mt-4 text-secondary">Submit your work at pheonixclub@gmail.com</p>
      </div>
      <div class="col-md-4">
        <div class="testimonial mb-5">
          <div class="avatar mx-auto">
            <img src="https://cdn.dribbble.com/users/24158/screenshots/17319469/media/bb4c64d35dd868d47a382499261edeb4.jpg?compress=1&resize=768x576&vertical=top" class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">Fantasy Writing</h4>
          <h6 class="font-weight-bold blue-text my-3">Competition 3</h6>
          <p class="font-weight-normal dark-grey-text">
          LIVE NOW! DEADLINE: 15TH JULY.</p>
        </div>
        </div>
      </div>
      
    </div> 
    
   </section> 

       <section class=""  id="places">
        <div class="container">
          <div class="col-sm-12 col-md-12 mb-4">
             <h3 class="text-center text-secondary mt-4">Location and Contacts</h3>
         </div>
       <div class="accordion" id="accordionExample">
        <div class="card">
         <div class="card-header" id="headingOne">
            <h2 class="mb-0">
            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               Karachi
            </button>
            </h2>
         </div>

         <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
               Phone Number: +92-1311921
               Email: pheonixclub@gmail.com
            </div>
         </div>
      </div>

      
      <div class="card">
         <div class="card-header" id="headingTwo">
            <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Lahore
            </button>
            </h2>
         </div>
         <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div class="card-body">Phone Number: +92-1311921
               Email: pheonixclub@gmail.com </div>
         </div>
      </div>
      <div class="card">
         <div class="card-header" id="headingThree">
            <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
               Islamabad
            </button>
            </h2>
         </div>
         <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div class="card-body">
            Phone Number: +92-1311921
               Email: pheonixclub@gmail.com            </div>
         </div>
      </div>
      </div>
    </div> 
    </section>

    <br>
    </br>
    <br>
    </br>
   </div>
    );
  }
  
  export default Content;