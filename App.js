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
  const { resData } = props;

  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.card.card.info.cloudinaryImageId
        }
      />
      <h3>{resData.card.card.info.name}</h3>
      <h4>{resData.card.card.info.cuisines.join(", ")}</h4>
      <h4>{resData.card.card.info.avgRating} Starts</h4>
      <h5>{resData.card.card.info.sla.deliveryTime} Minutes</h5>
      <h5>{resData.card.card.info.costForTwo} for Two</h5>
    </div>
  );
};

const resList = [
  
  
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "304675",
          name: "Chowman",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/7/6/c9f5253e-ced3-4599-b6c3-5a9a50818717_83e93d2d-aa2a-4fd2-8dfc-5dad468f72ce.JPG",
          locality: "New Town",
          areaName: "New Town",
          costForTwo: "₹700 for two",
          cuisines: [
            "Chinese",
            "Asian",
            "Thai",
            "Oriental",
            "Burmese",
            "Tibetan",
          ],
          avgRating: 4.5,
          parentId: "266",
          avgRatingString: "4.5",
          totalRatingsString: "26K+",
          promoted: true,
          adTrackingId:
            "cid=33370472~p=0~adgrpid=33370472#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=304675~plpr=COLLECTION~eid=dd213e37-6628-4139-9e43-7b7d39464ebc~srvts=1759246078417~collid=80463",
          sla: {
            deliveryTime: 34,
            lastMileTravel: 4.7,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "4.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-10-01 03:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-Chinese.pngImage preview",
                description: "Delivery!",
              },
              {
                imageId: "newg.pngImage preview",
                description: "Gourmet",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "Rxawards/_CATEGORY-Chinese.pngImage preview",
                      description: "Delivery!",
                    },
                  },
                  {
                    attributes: {
                      imageId: "newg.pngImage preview",
                      description: "Gourmet",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹249",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
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
            commsStyling: {},
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
              rating: "4.3",
              ratingCount: "2.2K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "33370472",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=304675&source=collection&query=Noodles",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "423232",
          name: "Shanghai Flavours of China Town",
          cloudinaryImageId: "eaae15d518b847c98d7da865d263be30",
          locality: "Salt Lake",
          areaName: "Salt Lake",
          costForTwo: "₹600 for two",
          cuisines: [
            "Chinese",
            "Asian",
            "Oriental",
            "Pan-Asian",
            "Thai",
            "Seafood",
            "Beverages",
            "Desserts",
          ],
          avgRating: 4.3,
          parentId: "181666",
          avgRatingString: "4.3",
          totalRatingsString: "9.0K+",
          sla: {
            deliveryTime: 45,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "45-50 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-10-01 02:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-Chinese.pngImage preview",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "Delivery!",
                      imageId: "Rxawards/_CATEGORY-Chinese.pngImage preview",
                    },
                  },
                ],
              },
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹100",
            logoCtx: {
              text: "BENEFITS",
            },
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
            commsStyling: {},
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
              rating: "3.9",
              ratingCount: "1.1K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=423232&source=collection&query=Noodles",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "299656",
          name: "Hatari - A Unit of Gariahat Hatari",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/11/fa2eed02-bb38-4a3a-9415-0b70021ea4fb_299656.jpg",
          locality: "Salt Lake",
          areaName: "Bidhannagar",
          costForTwo: "₹500 for two",
          cuisines: ["Chinese", "Pan-Asian"],
          avgRating: 4.6,
          parentId: "680736",
          avgRatingString: "4.6",
          totalRatingsString: "8.2K+",
          promoted: true,
          adTrackingId:
            "cid=32891694~p=2~adgrpid=32891694#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=299656~plpr=COLLECTION~eid=576f30b5-54c9-4717-a2cc-238b491a7fdb~srvts=1759246078417~collid=80463",
          sla: {
            deliveryTime: 51,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "50-60 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-10-01 02:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId:
                  "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.pngImage preview",
                description: "OnlyOnSwiggy",
              },
              {
                imageId: "newg.pngImage preview",
                description: "Gourmet",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "OnlyOnSwiggy",
                      imageId:
                        "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.pngImage preview",
                    },
                  },
                  {
                    attributes: {
                      description: "Gourmet",
                      imageId: "newg.pngImage preview",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹109",
            logoCtx: {
              text: "BENEFITS",
            },
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
            commsStyling: {},
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
              rating: "4.2",
              ratingCount: "1.0K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "32891694",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=299656&source=collection&query=Noodles",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "4554",
          name: "Rang De Basanti Dhaba",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/30/1f798741-0bbe-4960-b258-675117167573_4554.jpg",
          locality: "Salt Lake",
          areaName: "Salt Lake",
          costForTwo: "₹300 for two",
          cuisines: [
            "North Indian",
            "Kebabs",
            "Mughlai",
            "Biryani",
            "Punjabi",
            "Desserts",
            "Tandoor",
            "Indian",
          ],
          avgRating: 4.4,
          parentId: "758",
          avgRatingString: "4.4",
          totalRatingsString: "82K+",
          sla: {
            deliveryTime: 30,
            lastMileTravel: 0.1,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "0.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-10-01 03:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-North%20Indian.pngImage preview",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId:
                        "Rxawards/_CATEGORY-North%20Indian.pngImage preview",
                      description: "Delivery!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100",
            logoCtx: {
              text: "BENEFITS",
            },
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
            commsStyling: {},
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
              rating: "4.3",
              ratingCount: "27K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=4554&source=collection&query=Noodles",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1007285",
          name: "Big Bowl",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/7/7a046613-a2a6-465a-9318-3c1ece7d3985_f901ec18-a1b4-4298-921b-703087e0b253.jpg",
          locality: "New Town Rajarhat",
          areaName: "Chinar Park",
          costForTwo: "₹250 for two",
          cuisines: ["Chinese", "Tibetan", "Desserts"],
          avgRating: 4.4,
          parentId: "434792",
          avgRatingString: "4.4",
          totalRatingsString: "556",
          promoted: true,
          adTrackingId:
            "cid=33293408~p=3~adgrpid=33293408#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1007285~plpr=COLLECTION~eid=cc775532-aa2d-4006-942c-49c8897008fb~srvts=1759246078417~collid=80463",
          sla: {
            deliveryTime: 59,
            lastMileTravel: 8.1,
            serviceability: "SERVICEABLE",
            slaString: "55-65 mins",
            lastMileTravelString: "8.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-10-01 01:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹129",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
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
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "33293408",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1007285&source=collection&query=Noodles",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "57642",
          name: "Royal India Restaurant",
          cloudinaryImageId: "261cdc2cae0f896c76ab1bfdd3c31c0e",
          locality: "Salt Lake",
          areaName: "Salt Lake",
          costForTwo: "₹300 for two",
          cuisines: ["Biryani", "Chinese", "Kebabs", "North Indian"],
          avgRating: 4.1,
          parentId: "172196",
          avgRatingString: "4.1",
          totalRatingsString: "25K+",
          sla: {
            deliveryTime: 36,
            lastMileTravel: 2.1,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "2.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-10-01 04:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹135 OFF",
            subHeader: "ABOVE ₹199",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
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
            commsStyling: {},
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
              ratingCount: "160",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=57642&source=collection&query=Noodles",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1007276",
          name: "Chinese Wok",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/21/73a542b5-bfd0-416c-a860-a795ac1deee5_dccd896c-f67b-4a6c-a000-d1c343e5f6ea.jpg_compressed",
          locality: "New Town Rajarhat",
          areaName: "Chinar Park",
          costForTwo: "₹250 for two",
          cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
          avgRating: 4.3,
          parentId: "61955",
          avgRatingString: "4.3",
          totalRatingsString: "911",
          promoted: true,
          adTrackingId:
            "cid=33293421~p=5~adgrpid=33293421#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1007276~plpr=COLLECTION~eid=fd2fc23d-8bbc-47a4-ae04-fed7073cc18c~srvts=1759246078417~collid=80463",
          sla: {
            deliveryTime: 66,
            lastMileTravel: 8.1,
            serviceability: "SERVICEABLE",
            slaString: "65-75 mins",
            lastMileTravelString: "8.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-10-01 01:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹119",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
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
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "33293421",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1007276&source=collection&query=Noodles",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "8472",
          name: "Chai Break",
          cloudinaryImageId: "qba8v0amtrqeklimehya",
          locality: "Salt Lake",
          areaName: "Sector V Salt Lake",
          costForTwo: "₹400 for two",
          cuisines: [
            "Pizza",
            "North Indian",
            "Italian",
            "Beverages",
            "Tea",
            "Cafe",
          ],
          avgRating: 4.6,
          parentId: "234",
          avgRatingString: "4.6",
          totalRatingsString: "4.4K+",
          sla: {
            deliveryTime: 48,
            lastMileTravel: 1.3,
            serviceability: "SERVICEABLE",
            slaString: "45-55 mins",
            lastMileTravelString: "1.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-10-01 00:30:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.pngImage preview",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId:
                        "Rxawards/_CATEGORY-Cafe%20&%20Chai.pngImage preview",
                      description: "Delivery!",
                    },
                  },
                ],
              },
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹69",
            logoCtx: {
              text: "BENEFITS",
            },
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
            commsStyling: {},
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
              rating: "3.7",
              ratingCount: "131",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=8472&source=collection&query=Noodles",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1033681",
          name: "China Bites",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/5/18/827b011c-c4de-41af-8b81-6f1461ea7be1_dbea4855-e581-430c-83e1-619a3de01728.jpg",
          locality: "Salt Lake",
          areaName: "Salt Lake",
          costForTwo: "₹200 for two",
          cuisines: ["Chinese", "Asian", "Fast Food"],
          avgRating: 4.5,
          parentId: "7328",
          avgRatingString: "4.5",
          totalRatingsString: "67",
          promoted: true,
          adTrackingId:
            "cid=33212656~p=7~adgrpid=33212656#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1033681~plpr=COLLECTION~eid=5b056ea6-f439-4537-8c67-f0b985438492~srvts=1759246078417~collid=80463",
          sla: {
            deliveryTime: 46,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "45-50 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-09-30 23:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹135 OFF",
            subHeader: "ABOVE ₹249",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
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
            commsStyling: {},
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
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "33212656",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1033681&source=collection&query=Noodles",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "90492",
          name: "Momo I am",
          cloudinaryImageId: "sghzhwda7fyzep9oda2t",
          locality: "Salt Lake",
          areaName: "Salt Lake",
          costForTwo: "₹350 for two",
          cuisines: ["Asian", "Chinese", "Tibetan"],
          avgRating: 4.6,
          parentId: "2055",
          avgRatingString: "4.6",
          totalRatingsString: "11K+",
          sla: {
            deliveryTime: 44,
            lastMileTravel: 1.3,
            serviceability: "SERVICEABLE",
            slaString: "40-45 mins",
            lastMileTravelString: "1.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-10-01 00:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "newg.pngImage preview",
                description: "Gourmet",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "newg.pngImage preview",
                      description: "Gourmet",
                    },
                  },
                ],
              },
            },
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
            commsStyling: {},
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
              rating: "4.5",
              ratingCount: "4.9K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=90492&source=collection&query=Noodles",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "677747",
          name: "Spice O Mystery",
          cloudinaryImageId: "34fcc173de592f9ee256f11fdcbdd6d3",
          locality: "Ahirini Market",
          areaName: "Salt Lake",
          costForTwo: "₹230 for two",
          cuisines: ["Indian", "North Indian", "Snacks"],
          avgRating: 4.3,
          parentId: "405166",
          avgRatingString: "4.3",
          totalRatingsString: "2.0K+",
          promoted: true,
          adTrackingId:
            "cid=32532968~p=10~adgrpid=32532968#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=677747~plpr=COLLECTION~eid=c98dfa56-e1ae-447a-834f-dc50aadf2a8f~srvts=1759246078417~collid=80463",
          sla: {
            deliveryTime: 48,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "45-50 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-09-30 23:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹59",
            logoCtx: {
              text: "BENEFITS",
            },
            footerText: "4 DEALS LEFT",
            secondaryHeaderType: "SECONDARY_HEADER_TYPE_USAGE_LIMIT_OFFER",
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
            commsStyling: {},
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
              rating: "4.3",
              ratingCount: "36",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "32532968",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=677747&source=collection&query=Noodles",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "508460",
          name: "China Belly By Wow! Momo",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/6/dc37ef9e-b043-4000-867e-c91b3f165a8f_508460.jpg",
          locality: "SectorV",
          areaName: "Biddhanagar",
          costForTwo: "₹300 for two",
          cuisines: ["Chinese", "Asian", "Fast Food", "Beverages", "Snacks"],
          avgRating: 4.3,
          parentId: "304195",
          avgRatingString: "4.3",
          totalRatingsString: "1.4K+",
          sla: {
            deliveryTime: 48,
            lastMileTravel: 1.3,
            serviceability: "SERVICEABLE",
            slaString: "45-50 mins",
            lastMileTravelString: "1.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-10-01 01:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹39",
            logoCtx: {
              text: "BENEFITS",
            },
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
            commsStyling: {},
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
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=508460&source=collection&query=Noodles",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "383308",
          name: "Wow Chow",
          cloudinaryImageId: "tdjfsuwzs5arxdinhiu0",
          locality: "City Centre",
          areaName: "Bidhannagar",
          costForTwo: "₹500 for two",
          cuisines: ["Chinese", "Asian"],
          avgRating: 4.6,
          parentId: "10505",
          avgRatingString: "4.6",
          totalRatingsString: "205",
          promoted: true,
          adTrackingId:
            "cid=33326631~p=13~adgrpid=33326631#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=383308~plpr=COLLECTION~eid=6f23c2bd-44c6-4630-8799-f6bcde7178ef~srvts=1759246078417~collid=80463",
          sla: {
            deliveryTime: 55,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "55-65 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-10-01 00:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "40% OFF",
            subHeader: "UPTO ₹80",
            logoCtx: {
              text: "BENEFITS",
            },
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
            commsStyling: {},
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
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "33326631",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=383308&source=collection&query=Noodles",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
];

// Body
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* restaurant card */}
        <RestaurantCard resData={resList[0]} />
        <RestaurantCard resData={resList[1]} />
        <RestaurantCard resData={resList[2]} />
        <RestaurantCard resData={resList[3]} />
        <RestaurantCard resData={resList[4]} />
        <RestaurantCard resData={resList[5]} />
        <RestaurantCard resData={resList[6]} />
        <RestaurantCard resData={resList[7]} />
        <RestaurantCard resData={resList[8]} />
        <RestaurantCard resData={resList[9]} />
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
