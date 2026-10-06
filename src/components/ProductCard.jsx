function ProductCard({ title, price, des, image ,soldOut}) {
    return (
        <div className="product">
            <img
                className={`product-image ${soldOut ? "soldOut":""}`}
                src={image}
                alt="Adobe After Effects"
            />
            <div className="product-info">
                <h2>{title}</h2>
                <p>
                    {des}
                </p>
                <span>{soldOut ? "Sold Out" : `$ ${price}`}</span>
            </div>
        </div>
    )
}
export default ProductCard