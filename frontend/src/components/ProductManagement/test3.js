import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
export default function Test3() {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [image, setMainImage] = useState("");
    const [image1, setSubImage1] = useState("");
    const [image2, setSubImage2] = useState("");
    const [image3, setSubImage3] = useState("");

    const navigate = useNavigate();

    const { id } = useParams();
    useEffect(() => {
        getProductById();
    }, []);


    const getProductById = async () => {
        const response = await axios.get(`http://localhost:5000/products/get/${id}`);
        setName(response.data.name);
        setPrice(response.data.price);
        setDescription(response.data.description);
        setCategory(response.data.category);
        setMainImage(response.data.image);
        setSubImage1(response.data.image1);
        setSubImage2(response.data.image2);
        setSubImage3(response.data.image3);
        // alert(response.data.name);

    };

    const updateProduct = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/products/update-product/${id}`, {
                name,
                price,
                description,
                category,
                image,
                image1,
                image2,
                image3,
            });
            navigate("/test");
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <section class="vh-100">
            <div class="container h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-xl-9">
                        <h3 class="text-center mb-4 mt-5">Edit Product</h3>
                        <form onSubmit={updateProduct}>
                            <div class="card" >
                                <div class="card-body">
                                    <div class="row align-items-center pt-4 pb-3">
                                        <div class="col-md-3 ps-5">
                                            <h6 class="mb-0">Product name</h6>
                                        </div>
                                        <div class="col-md-9 pe-5">
                                            <input type="text" class="form-control form-control-lg" onChange={(e) => setName(e.target.value)} value={name || ""} />
                                        </div>
                                    </div>
                                    <hr class="mx-n3" />
                                    <div class="row align-items-center py-3">
                                        <div class="col-md-3 ps-5">
                                            <h6 class="mb-0">Price</h6>
                                        </div>
                                        <div class="col-md-9 pe-5">
                                            <input type="text" class="form-control form-control-lg" onChange={(e) => setPrice(e.target.value)} value={price || ""} />
                                        </div>
                                    </div>
                                    <hr class="mx-n3" />
                                    <div class="row align-items-center py-3">
                                        <div class="col-md-3 ps-5">
                                            <h6 class="mb-0">Description</h6>
                                        </div>
                                        <div class="col-md-9 pe-5">
                                            <textarea class="form-control" rows="3" onChange={(e) => setDescription(e.target.value)} value={description || ""}></textarea>
                                        </div>
                                    </div>
                                    <div class="row align-items-center py-3">
                                        <div class="col-md-3 ps-5">
                                            <h6 class="mb-0">Category</h6>
                                        </div>
                                        <div class="col-md-9 pe-5">
                                            <input type="text" class="form-control form-control-lg" onChange={(e) => setCategory(e.target.value)} value={category || ""} />
                                        </div>
                                    </div>
                                    <hr class="mx-n3" />
                                    <div class="row align-items-center py-3">
                                        <div class="col-md-3 ps-5">
                                            <h6 class="mb-0">Main Image</h6>
                                        </div>
                                        <div class="col-md-9 pe-5">
                                            <input type="text" class="form-control form-control-lg" placeholder="Input the image url here" onChange={(e) => setMainImage(e.target.value)} value={image || ""} />
                                        </div>
                                    </div>
                                    <div class="row align-items-center py-3">
                                        <div class="col-md-3 ps-5">
                                            <h6 class="mb-0">Sub Image 1</h6>
                                        </div>
                                        <div class="col-md-9 pe-5">
                                            <input type="text" class="form-control form-control-lg" placeholder="Input the image url here" onChange={(e) => setSubImage1(e.target.value)} value={image1 || ""} />
                                        </div>
                                    </div>
                                    <div class="row align-items-center py-3">
                                        <div class="col-md-3 ps-5">
                                            <h6 class="mb-0">Sub Image 2</h6>
                                        </div>
                                        <div class="col-md-9 pe-5">
                                            <input type="text" class="form-control form-control-lg" placeholder="Input the image url here" onChange={(e) => setSubImage2(e.target.value)} value={image2 || ""} />
                                        </div>
                                    </div>
                                    <div class="row align-items-center py-3">
                                        <div class="col-md-3 ps-5">
                                            <h6 class="mb-0">Sub Image 3</h6>
                                        </div>
                                        <div class="col-md-9 pe-5">
                                            <input type="text" class="form-control form-control-lg" placeholder="Input the image url here" onChange={(e) => setSubImage3(e.target.value)} value={image3 || ""} />
                                        </div>
                                    </div>
                                    <hr class="mx-n3" />
                                    <div class="px-5 py-4">
                                        <input type="submit" class="btn btn-primary btn-lg" value="Update Product" />
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
