import axios from "axios";
import { useFormik } from "formik";
import React from "react";
function AddProduct() {
  const formik = useFormik({
    initialValues: {
      name: "",
      unitPrice: "",
      stock: "",
      quantityPerUnit: "",
    },
    onSubmit: (values) => {
      axios
        .post("https://northwind.vercel.app/api/products", values)
        .then((res) => {
          console.log("Başarılı!", res);
        })
        .catch((error) => {
          console.error("Hata:", error);
        });
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>
        <div>
          <label htmlFor="unitPrice">Unit Price:</label>
          <input
            type="number"
            name="unitPrice"
            onChange={formik.handleChange}
            value={formik.values.unitPrice}
          />
        </div>
        <div>
          <label htmlFor="stock">Stock:</label>
          <input
            type="number"
            name="stock"
            onChange={formik.handleChange}
            value={formik.values.stock}
          />
        </div>
        <div>
          <label htmlFor="quantityPerUnit">Quantity Per Unit:</label>
          <input
            type="text"
            name="quantityPerUnit"
            onChange={formik.handleChange}
            value={formik.values.quantityPerUnit}
          />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </>
  );
}

export default AddProduct;
