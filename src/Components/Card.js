import React from "react";
export const Card = ({ menuData }) => {
  console.log(menuData);

  return (
    <>
      <div className="container mt-4">
        <div className="row">
        {menuData.map((currEle) => {  
          return (
            <>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 menu_card">
                <div class="card" key={currEle.id}>
                  <img
                    src={currEle.image}
                    class="card-img-top"
                    height={200}
                    width={20}
                  />
                  <div class="card-body">
                    <h5 class="card-title">{currEle.name}</h5>
                    <p class="card-text">
                      {currEle.description}
                    </p>
                    <p>Price: ${currEle.price}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
        </div>
      </div>
    </>
  );
};
export default Card;
