import React from "react";
import ReactDOM from "react-dom/client";

const heading=React.createElement("h1",{
  
},"Food Villa");

//React element
const title1=(
    <img src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"></img>
    
);
//Functional component
const Title=()=>(   
    <a href="/">
    <img className="logo"
    
    alt="logo" src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"></img>

    </a>
        // <h1 id="title" key="h2">
    //     Food Villa
    // </h1>
);


const HeaderComponent=()=>{
return(
<div className="header">

<Title/>
<div className="nav-items">
    <ul>
        <li>Home</li>  
        <li>About</li> 
        <li>Contact</li>   
        <li>Cart</li>   
    </ul>    
    
</div>
</div>

)

};

const McDonalds={
    name:"McDonalds",
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/0e8f93a56b93e43d7627c2c21bc1106c",
    cusines: ["Burgers", "Beverages"],
    rating:"4.3"

}

const ReastaurantList=[
    {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "267544",
          "name": "Gopaljee Cafe",
          "uuid": "95d0b475-16c4-4f58-be4b-1958de27a8fa",
          "city": "1",
          "area": "Bellandur",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "l54c700dfn5wpzrao6rc",
          "cuisines": [
            "Indian"
          ],
          "tags": [
            
          ],
          "costForTwo": 25000,
          "costForTwoString": "₹250 FOR TWO",
          "deliveryTime": 21,
          "minDeliveryTime": 21,
          "maxDeliveryTime": 21,
          "slaString": "21 MINS",
          "lastMileTravel": 2.799999952316284,
          "slugs": {
            "restaurant": "gopaljee-cafe-bellandur-sarjapur-bellandur-sarjapur",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "NO. 17/1, CHANDRA MANSION, GROUND FLOOR, AMBALIPURA VILLAGE, SARJAPURA MAIN ROAD, BEHIND MORIZ HOTEL, opposite to back gate of akme harmony appartment",
          "locality": "Sarjapur Road",
          "parentId": 89083,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=5694708~p=1~eid=00000185-9f8e-2a8c-2510-d1a80022016d",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "2.7 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "267544",
            "deliveryTime": 21,
            "minDeliveryTime": 21,
            "maxDeliveryTime": 21,
            "lastMileTravel": 2.799999952316284,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "4.3",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "654809",
          "name": "Meghana Foods",
          "uuid": "714578ac-c1b9-46a2-82af-a0d10ad21ad4",
          "city": "1",
          "area": "Sarjapur Road",
          "totalRatingsString": "500+ ratings",
          "cloudinaryImageId": "c627e55c996978a070c10079ae57f706",
          "cuisines": [
            "Biryani",
            "Andhra",
            "South Indian",
            "North Indian",
            "Chinese",
            "Seafood"
          ],
          "tags": [
            
          ],
          "costForTwo": 50000,
          "costForTwoString": "₹500 FOR TWO",
          "deliveryTime": 26,
          "minDeliveryTime": 26,
          "maxDeliveryTime": 26,
          "slaString": "26 MINS",
          "lastMileTravel": 3.5,
          "slugs": {
            "restaurant": "meghana-foods-bellandur-sarjapur-bellandur-sarjapur",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "SY No.18/2A, 1ST FLOOR G R S TOWERS SARJAPURA ROAD,BELLANDUR BANGALORE ,Mahadevapura , B.B.M.P East,Karnataka, 560102",
          "locality": "G R S TOWERS",
          "parentId": 635,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "ribbon": [
            {
              "type": "NEW"
            }
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "3.5 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "654809",
            "deliveryTime": 26,
            "minDeliveryTime": 26,
            "maxDeliveryTime": 26,
            "lastMileTravel": 3.5,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.4",
          "totalRatings": 500,
          "new": true
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "210119",
          "name": "Sri Jayadurga Biryani",
          "uuid": "13927ae4-7437-4d24-959e-888585c704e8",
          "city": "1",
          "area": "Marathahalli",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "e5k8viofbtrxxo75lxdy",
          "cuisines": [
            "Biryani",
            "South Indian",
            "Andhra",
            "Hyderabadi",
            "Snacks"
          ],
          "tags": [
            
          ],
          "costForTwo": 30000,
          "costForTwoString": "₹300 FOR TWO",
          "deliveryTime": 27,
          "minDeliveryTime": 27,
          "maxDeliveryTime": 27,
          "slaString": "27 MINS",
          "lastMileTravel": 4.900000095367432,
          "slugs": {
            "restaurant": "sri-jayadurga-biryani-marathahalli-marathahalli",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "Sri Jaya Durga Restaurant, OPP AMRUTHA BAKERY, LAKSHMI NARAYANA TEMPLE ROAD, MUNNEKOLALA, MARATHAHALLI, BANGALORE",
          "locality": "Munnekollal",
          "parentId": 14529,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "4.9 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "210119",
            "deliveryTime": 27,
            "minDeliveryTime": 27,
            "maxDeliveryTime": 27,
            "lastMileTravel": 4.900000095367432,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.6",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "10829",
          "name": "California Burrito",
          "uuid": "db5c9376-d19e-4cc5-a224-0ca98f9f55ba",
          "city": "1",
          "area": "Bellandur",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "ce6mlqcqsxdyqpbpa96y",
          "cuisines": [
            "Mexican",
            "American",
            "Salads",
            "Continental"
          ],
          "tags": [
            
          ],
          "costForTwo": 40000,
          "costForTwoString": "₹400 FOR TWO",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "slaString": "23 MINS",
          "lastMileTravel": 1.5,
          "slugs": {
            "restaurant": "california-burrito-outer-ring-road-bellandursarjapur",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "Building no1, The Bay Food Court, RMZ Ecoworld, Bellandur, Bangalore 560103",
          "locality": "EcoWorld",
          "parentId": 1252,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=5710619~p=13~eid=00000185-9f8e-2a8c-2510-d1ac00220d0b",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "1.5 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "10829",
            "deliveryTime": 23,
            "minDeliveryTime": 23,
            "maxDeliveryTime": 23,
            "lastMileTravel": 1.5,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "4.5",
          "totalRatings": 100,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "8530",
          "name": "Kritunga Restaurant",
          "uuid": "84e612db-d9d4-483d-ad77-81ea42c2208f",
          "city": "1",
          "area": "Marathahalli",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "vxxpqtjryjhhrpoxt65h",
          "cuisines": [
            "Andhra",
            "Biryani",
            "South Indian",
            "Hyderabadi"
          ],
          "tags": [
            
          ],
          "costForTwo": 50000,
          "costForTwoString": "₹500 FOR TWO",
          "deliveryTime": 28,
          "minDeliveryTime": 28,
          "maxDeliveryTime": 28,
          "slaString": "28 MINS",
          "lastMileTravel": 5.800000190734863,
          "slugs": {
            "restaurant": "kritunga-kundanhalli-gate-marathahalli",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "42 2  Sriven square  Munekollela  Beside star bazaar  Kundanahalli gate  Bangalore",
          "locality": "Kundalahalli",
          "parentId": 20088,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "5.8 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "8530",
            "deliveryTime": 28,
            "minDeliveryTime": 28,
            "maxDeliveryTime": 28,
            "lastMileTravel": 5.800000190734863,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.7",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "305534",
          "name": "Maalgaadi by Dhaba Estd 1986 Delhi",
          "uuid": "8b268117-234c-4379-a5ef-9429120d982e",
          "city": "1",
          "area": "Marathahalli",
          "totalRatingsString": "500+ ratings",
          "cloudinaryImageId": "ztjyraaohjcfmkycignm",
          "cuisines": [
            "North Indian",
            "Indian",
            "Biryani",
            "Punjabi",
            "Kebabs",
            "Grill",
            "Mughlai",
            "Desserts"
          ],
          "tags": [
            
          ],
          "costForTwo": 30000,
          "costForTwoString": "₹300 FOR TWO",
          "deliveryTime": 34,
          "minDeliveryTime": 34,
          "maxDeliveryTime": 34,
          "slaString": "34 MINS",
          "lastMileTravel": 5.5,
          "slugs": {
            "restaurant": "maalgaadi-by-dhaba-estd-1986-delhi-marathahalli-marathahalli",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "1st Floor, NTR Royal Plaza, Outer Ring Road, Marathahalli, Bangalore",
          "locality": "Outer Ring Road",
          "parentId": 11049,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "Flat ₹125 off",
            "shortDescriptionList": [
              {
                "meta": "Flat ₹125 off on orders above ₹249",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "Flat ₹125 off on orders above ₹249 | Use code FLAT125",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "₹125 OFF",
            "shortDescriptionList": [
              {
                "meta": "Use FLAT125",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "Flat ₹125 off on orders above ₹249 | Use code FLAT125",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=5663738~p=7~eid=00000185-9f8e-2a8c-2510-d1aa00220775",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "5.5 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "305534",
            "deliveryTime": 34,
            "minDeliveryTime": 34,
            "maxDeliveryTime": 34,
            "lastMileTravel": 5.5,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "4.1",
          "totalRatings": 500,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "445762",
          "name": "Burger King",
          "uuid": "548856fe-2b3d-4d24-b572-a25eed551d9f",
          "city": "1",
          "area": "Doddanekundi",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "nt1itsfhqgnfcjkxbb7m",
          "cuisines": [
            "Burgers",
            "American"
          ],
          "tags": [
            
          ],
          "costForTwo": 35000,
          "costForTwoString": "₹350 FOR TWO",
          "deliveryTime": 38,
          "minDeliveryTime": 38,
          "maxDeliveryTime": 38,
          "slaString": "38 MINS",
          "lastMileTravel": 5.800000190734863,
          "slugs": {
            "restaurant": "burger-king-marathalli-kadugodi",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "burger king Kote MR Plaza, Anand Nagar, Sanjay Nagar, Chinnapanna Halli, Bengaluru, Karnataka 560037",
          "locality": "Doddanekundi",
          "parentId": 166,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "Get every item under 129",
            "shortDescriptionList": [
              {
                "meta": "Get every item under 129",
                "discountType": "FinalPrice",
                "operationType": "RESTAURANT"
              },
              {
                "meta": "FREE DELIVERY",
                "discountType": "FREE_DELIVERY",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "Get every item under 129",
                "discountType": "FinalPrice",
                "operationType": "RESTAURANT"
              },
              {
                "meta": "FREE DELIVERY",
                "discountType": "FREE_DELIVERY",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "",
            "shortDescriptionList": [
              {
                "meta": "",
                "discountType": "FinalPrice",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "Get every item under 129",
                "discountType": "FinalPrice",
                "operationType": "RESTAURANT"
              },
              {
                "meta": "FREE DELIVERY",
                "discountType": "FREE_DELIVERY",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "5.8 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "445762",
            "deliveryTime": 38,
            "minDeliveryTime": 38,
            "maxDeliveryTime": 38,
            "lastMileTravel": 5.800000190734863,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.2",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "261261",
          "name": "Hotel Empire",
          "uuid": "1737faa1-3303-4f10-9111-74193f23c459",
          "city": "1",
          "area": "Sarjapur Road",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "ue1tt2ujt2ybghd60bs0",
          "cuisines": [
            "North Indian",
            "Kebabs",
            "Biryani"
          ],
          "tags": [
            
          ],
          "costForTwo": 45000,
          "costForTwoString": "₹450 FOR TWO",
          "deliveryTime": 36,
          "minDeliveryTime": 36,
          "maxDeliveryTime": 36,
          "slaString": "36 MINS",
          "lastMileTravel": 5,
          "slugs": {
            "restaurant": "hotel-empire-bellandur-sarjapur-bellandur-sarjapur",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "Countryside Layout, Rainbow Drive, Bengaluru, Karnataka 560035",
          "locality": "Countryside Layout",
          "parentId": 475,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "5 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "261261",
            "deliveryTime": 36,
            "minDeliveryTime": 36,
            "maxDeliveryTime": 36,
            "lastMileTravel": 5,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.1",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "420659",
          "name": "Sri Lakshmi Biryani",
          "uuid": "eb227257-1596-441a-9c84-8265417d2d19",
          "city": "1",
          "area": "Marathahalli",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "n7pn6ilfponvcatp0n73",
          "cuisines": [
            "Biryani",
            "North Indian",
            "Snacks"
          ],
          "tags": [
            
          ],
          "costForTwo": 20000,
          "costForTwoString": "₹200 FOR TWO",
          "deliveryTime": 28,
          "minDeliveryTime": 28,
          "maxDeliveryTime": 28,
          "slaString": "28 MINS",
          "lastMileTravel": 4.900000095367432,
          "slugs": {
            "restaurant": "sri-lakshmi-biryani-kadubeesanahalli-kadubeesanahalli",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "No 15&16 Srinivasa Reddy building, Lakshmi Narayana temple road, manunatha layout, munnekoll Bangalore 560037",
          "locality": "Manunatha Layout",
          "parentId": 193940,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "4.9 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "420659",
            "deliveryTime": 28,
            "minDeliveryTime": 28,
            "maxDeliveryTime": 28,
            "lastMileTravel": 4.900000095367432,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.6",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "23690",
          "name": "McDonald's",
          "uuid": "decddcbd-0496-4052-aa83-7e03973e0888",
          "city": "1",
          "area": "Bellandur",
          "totalRatingsString": "5000+ ratings",
          "cloudinaryImageId": "0e8f93a56b93e43d7627c2c21bc1106c",
          "cuisines": [
            "Burgers",
            "Beverages",
            "Cafe",
            "Desserts"
          ],
          "tags": [
            
          ],
          "costForTwo": 40000,
          "costForTwoString": "₹400 FOR TWO",
          "deliveryTime": 20,
          "minDeliveryTime": 20,
          "maxDeliveryTime": 20,
          "slaString": "20 MINS",
          "lastMileTravel": 2,
          "slugs": {
            "restaurant": "mc-donalds-bellandursarjapur-bellandursarjapur",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "ORR Central Mall, S No.5/78/7 Bellandur Village, Varthur Hobli, Sarjapura Road, Bengaluru Fast, Taluk, Bengaluru -560103.\n",
          "locality": "ORR Central Mall",
          "parentId": 630,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "2 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "23690",
            "deliveryTime": 20,
            "minDeliveryTime": 20,
            "maxDeliveryTime": 20,
            "lastMileTravel": 2,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.2",
          "totalRatings": 5000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "178387",
          "name": "Hyderabadi Handi Biryani",
          "uuid": "6b7bd1c4-d5c3-45dd-b6ac-b2d695786fe9",
          "city": "1",
          "area": "Marathahalli",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "ewzw2m8whkincsto9kqm",
          "cuisines": [
            "Biryani",
            "North Indian",
            "Desserts",
            "Tandoor",
            "Hyderabadi",
            "Andhra"
          ],
          "tags": [
            
          ],
          "costForTwo": 40000,
          "costForTwoString": "₹400 FOR TWO",
          "deliveryTime": 25,
          "minDeliveryTime": 25,
          "maxDeliveryTime": 25,
          "slaString": "25 MINS",
          "lastMileTravel": 4.5,
          "slugs": {
            "restaurant": "hyderabadi-handi-biryani-marathahalli-marathahalli",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "New Address No.32,ckb layout, munekolola, marthahali, Bangalore-37.",
          "locality": "CKB Layout",
          "parentId": 11087,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "4.5 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "178387",
            "deliveryTime": 25,
            "minDeliveryTime": 25,
            "maxDeliveryTime": 25,
            "lastMileTravel": 4.5,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.5",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "487083",
          "name": "A2B - Adyar Ananda Bhavan",
          "uuid": "59134b3a-8c37-4330-acfe-06958e2887d1",
          "city": "1",
          "area": "Sarjapur Road",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "nmhb73zqlgvf3spussds",
          "cuisines": [
            "South Indian",
            "North Indian",
            "Sweets",
            "Chinese"
          ],
          "tags": [
            
          ],
          "costForTwo": 25000,
          "costForTwoString": "₹250 FOR TWO",
          "deliveryTime": 24,
          "minDeliveryTime": 24,
          "maxDeliveryTime": 24,
          "slaString": "24 MINS",
          "lastMileTravel": 3,
          "slugs": {
            "restaurant": "a2b-veg-bellandur-sarjapur-bellandur-sarjapur-2",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "No 28/29, RR Mansion Ground Floor, Sarjapur Main Road, Bangalore- 562125",
          "locality": "RR MANSION",
          "parentId": 22,
          "unserviceable": false,
          "veg": true,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=5700062~p=31~eid=00000185-9f8e-2a8c-2510-d1b200221f10",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "3 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "487083",
            "deliveryTime": 24,
            "minDeliveryTime": 24,
            "maxDeliveryTime": 24,
            "lastMileTravel": 3,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "4.4",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "1221",
          "name": "Biryani Day",
          "uuid": "1dec917e-3f4b-479b-b4db-f7095248bbd8",
          "city": "1",
          "area": "Marathahalli",
          "totalRatingsString": "500+ ratings",
          "cloudinaryImageId": "ucpbuzrvhg0ire3h9hwu",
          "cuisines": [
            "North Indian",
            "Chinese",
            "Andhra",
            "Biryani"
          ],
          "tags": [
            
          ],
          "costForTwo": 25000,
          "costForTwoString": "₹250 FOR TWO",
          "deliveryTime": 32,
          "minDeliveryTime": 32,
          "maxDeliveryTime": 32,
          "slaString": "32 MINS",
          "lastMileTravel": 5,
          "slugs": {
            "restaurant": "biryani-day-thulsi-theater-road-marathahalli",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "No 389/2, 7th Cross, Thulsi Theater Road, Marathalli",
          "locality": "Thulsi Theater Road",
          "parentId": 2635,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "5 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "1221",
            "deliveryTime": 32,
            "minDeliveryTime": 32,
            "maxDeliveryTime": 32,
            "lastMileTravel": 5,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.8",
          "totalRatings": 500,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "410683",
          "name": "Soul Rasa",
          "uuid": "5fddc67b-5287-45a0-a252-c34eb9b290d1",
          "city": "1",
          "area": "Koramangala",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "xoth5ysuv2r6ctizaso5",
          "cuisines": [
            "Indian",
            "Healthy Food",
            "Home Food",
            "South Indian",
            "North Indian"
          ],
          "tags": [
            
          ],
          "costForTwo": 40000,
          "costForTwoString": "₹400 FOR TWO",
          "deliveryTime": 34,
          "minDeliveryTime": 34,
          "maxDeliveryTime": 34,
          "slaString": "34 MINS",
          "lastMileTravel": 6.599999904632568,
          "slugs": {
            "restaurant": "hb-koramangala-koramangala",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "88/1,Ward No.66, Sajjapura Road, Madiwala, Jakkasandra Village Bangalore-South, 560034",
          "locality": "Jakkasandra",
          "parentId": 239281,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=5709921~p=19~eid=00000185-9f8e-2a8c-2510-d1ae0022133c",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "6.5 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "410683",
            "deliveryTime": 34,
            "minDeliveryTime": 34,
            "maxDeliveryTime": 34,
            "lastMileTravel": 6.599999904632568,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "4.3",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "391071",
          "name": "Tawakkal mubarak hotel",
          "uuid": "3c6e8944-817a-4846-bb04-3d958ee0b855",
          "city": "1",
          "area": "CV Raman Nagar",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "dg9q5qsjldskbjokz4di",
          "cuisines": [
            "Indian",
            "Biryani"
          ],
          "tags": [
            
          ],
          "costForTwo": 50000,
          "costForTwoString": "₹500 FOR TWO",
          "deliveryTime": 44,
          "minDeliveryTime": 44,
          "maxDeliveryTime": 44,
          "slaString": "44 MINS",
          "lastMileTravel": 9.199999809265137,
          "slugs": {
            "restaurant": "tawakkal-mubarak-hotel-cv-raman-nagar-cv-raman-nagar",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "26/1 GUJRI LANE ISLAMPUR VIMANAPURA H A L",
          "locality": "Vimanapura",
          "parentId": 256917,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 1,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "9.1 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "391071",
            "deliveryTime": 44,
            "minDeliveryTime": 44,
            "maxDeliveryTime": 44,
            "lastMileTravel": 9.199999809265137,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "IT_IS_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.9",
          "totalRatings": 100,
          "new": false
        },
        "subtype": "basic"
      }
]

const ReastaurantCard=({
    cloudinaryImageId,name,cuisines,avgRating
})=>{
   
    return(
        
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+
            cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{cuisines.join(",")}</h3>
            <h4>{avgRating} stars</h4>
        </div>
    )
}

const Body=()=>{
    return (
        <div className="restaurant-list">

           {
        ReastaurantList.map((restaurant)=>{
            return <ReastaurantCard {...restaurant.data} key={restaurant.data.id}/>
        })
        /* <ReastaurantCard restaurant={ReastaurantList[0]}/>
        <ReastaurantCard restaurant={ReastaurantList[1]}/>
        <ReastaurantCard restaurant={ReastaurantList[2]}/>
        <ReastaurantCard restaurant={ReastaurantList[3]}/>
        <ReastaurantCard restaurant={ReastaurantList[4]}/>
     */}
        
        </div>
        
       
    )
}

const Footer=()=>{
    return (
       <h4>Footer</h4> 
    )
}

const AppLayout=()=>{

    return(
       <>
        <HeaderComponent />
        <Body />
        <Footer />
       </>
        /**
         * 
         * Header
         *  - Logo
         *  - Nav Items (Right side)
         * Body
         *  - Search Bar
         *  - ReastaurantList 
         *      - Image
         *      - Name
         *      - Rating
         *      - Cusines
         * Footer
         *  - links
         *  - Copy rights
         * 
         */
       
    )
    
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);