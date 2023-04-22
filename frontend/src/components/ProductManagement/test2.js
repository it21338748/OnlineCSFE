import React, { useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function Test2() {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [subImage1, setSubImage1] = useState("");
  const [subImage2, setSubImage2] = useState("");
  const [subImage3, setSubImage3] = useState("");

  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault();
    event.target.reset();

    const data = {
      name: name,
      price: price,
      description: description,
      category: category,
      image: mainImage,
      image1: subImage1,
      image2: subImage2,
      image3: subImage3,
    };

    axios
      .post(" http://localhost:5000/products/addProduct", data)
      .then((res) => {
        console.log(res);
        navigate('../test')
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data);
      });
  }
  return (
    <section class="vh-100">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-xl-9">
            <h3 class="text-center mb-4 mt-5">Add Product</h3>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div class="card" >
                <div class="card-body">
                  <div class="row align-items-center pt-4 pb-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">Product name</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <input type="text" class="form-control form-control-lg" onChange={(e) => setName(e.target.value)} />
                    </div>
                  </div>
                  <hr class="mx-n3" />
                  <div class="row align-items-center py-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">Price</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <input type="text" class="form-control form-control-lg" onChange={(e) => setPrice(e.target.value)} />
                    </div>
                  </div>
                  <hr class="mx-n3" />
                  <div class="row align-items-center py-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">Description</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <textarea class="form-control" rows="3" onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                  </div>
                  <div class="row align-items-center py-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">Category</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <input type="text" class="form-control form-control-lg" onChange={(e) => setCategory(e.target.value)} />
                    </div>
                  </div>
                  <hr class="mx-n3" />
                  <div class="row align-items-center py-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">Main Image</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <input type="text" class="form-control form-control-lg" placeholder="Input the image url here" onChange={(e) => setMainImage(e.target.value)} />
                    </div>
                  </div>
                  <div class="row align-items-center py-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">Sub Image 1</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <input type="text" class="form-control form-control-lg" placeholder="Input the image url here" onChange={(e) => setSubImage1(e.target.value)} />
                    </div>
                  </div>
                  <div class="row align-items-center py-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">Sub Image 2</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <input type="text" class="form-control form-control-lg" placeholder="Input the image url here" onChange={(e) => setSubImage2(e.target.value)} />
                    </div>
                  </div>
                  <div class="row align-items-center py-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">Sub Image 3</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <input type="text" class="form-control form-control-lg" placeholder="Input the image url here" onChange={(e) => setSubImage3(e.target.value)} />
                    </div>
                  </div>
                  <hr class="mx-n3" />
                  <div class="px-5 py-4">
                    <input type="submit" class="btn btn-primary btn-lg" value="Add Product" />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <ToastContainer />



        </div>
      </div>
    </section>
  )
}
