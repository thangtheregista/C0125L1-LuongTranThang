export default function ProductForm({handleSubmit,productForm,handleChange}) {
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter product name" name="name" value={productForm.name} onChange={(e)=> handleChange(e)}  />
                <br/>
                <input type="text" placeholder="Enter product description" name="description" value={productForm.description} onChange={(e)=> handleChange(e)}/>
                <br/>
                <input type="number" placeholder="Enter product price" name="price" value={productForm.price} onChange={(e)=> handleChange(e)}/>
                <br/>
                <button type="submit">Add product</button>
            </form>
        </div>
    )
}