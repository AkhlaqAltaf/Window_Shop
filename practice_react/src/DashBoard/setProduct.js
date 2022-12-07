import { useState } from "react";
import { Link } from "react-router-dom";
function SetProduct() {
    const [product, setProduct] = useState(

        { name: "", price: "" }
    );

    const SetName = (e) => {

        setProduct({ name: e.target.value })

    }
    const SetPrice = (p) => {

        setProduct({ price: p.target.value })
    }

    return (
        <div>
            <input type={Text} onChange={SetName} />
            <input type={Number} onChange={SetPrice} />

            <div>

                <Link to="/" state={{ product: product }}>
                    <button>
                        Done
                    </button>
                </Link>
            </div>

        </div>

    );
}

export default SetProduct;