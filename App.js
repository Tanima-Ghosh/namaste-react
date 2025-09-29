import React from "react";
import ReactDOM from "react-dom/client";

// Header
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=&txt_keyword=All"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

// RestaurantCard

const RestaurantCard = (props) => {

  const {resData} = props    

  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId
        }
      />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.avgRating} Starts</h4>
      <h5>{resData.info.sla.deliveryTime} Minutes</h5>
      <h5>{resData.info.costForTwo / 100} for Two</h5>
    </div>
  );
};

const resObj = {
  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  info: {
    id: "26500",
    name: "Chaat Chator",
    cloudinaryImageId: "gzlyvvtmhuntgrw4ahqd",
    locality: "Shibpur",
    areaName: "Shibpur",
    costForTwo: 25000,
    costForTwoString: "₹250 for two",
    cuisines: ["Street Food", "Chaat", "Indian"],
    avgRating: 4.5,
    veg: true,
    parentId: "56628",
    avgRatingString: "4.5",
    totalRatingsString: "2.0K+",
    sla: {
      deliveryTime: 54,
      lastMileTravel: 1.4,
      serviceability: "SERVICEABLE",
      slaString: "50-60 mins",
      lastMileTravelString: "1.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-09-29 22:30:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.pngImage preview",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "pureveg",
                imageId: "v1695133679/badges/Pure_Veg111.pngImage preview",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹75 OFF",
      subHeader: "ABOVE ₹299",
      discountTag: "FLAT DEAL",
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        text: "BENEFITS",
        logo: "v1634558776/swiggy_one/OneLogo_3x.pngImage preview",
      },
      freedelMessage: "FREE DELIVERY",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "3.8",
        ratingCount: "35",
      },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  analytics: {
    context: "seo-data-cb1920eb-d195-4054-8ad4-0ed3e1bd6fe2",
  },
  cta: {
    link: "https://www.swiggy.com/city/kolkata/chaat-chator-shibpur-rest26500",
    text: "RESTAURANT_MENU",
    type: "WEBLINK",
  },
  widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
};

// Body
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* restaurant card */}
        <RestaurantCard
          resData = {resObj}
        />
       
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
