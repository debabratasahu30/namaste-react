import React from "react";
import { createRoot } from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <img
        className="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHZ7SCzA133DWY5ntCqNJtiAw6URrY4wGd2dWZdXJ6ojZcfSMoDGwIoltEs-dRIuihSbw&usqp=CAU"
        alt="header-logo"
      />
      <ul className="nav-list">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>services</li>
          <li>cart</li>
        </ul>
      </ul>
    </div>
  );
};
const heading = <h3 className="cat-heading">Most Popular Resturants!</h3>;
const FoodCard = ({...props}) => 
{
  return(
  <div className="food-card">
  <img className="food-card-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+props.cloudinaryImageId} alt="food-card"/>
  <div className="food-data">
    <h5>{props.name} <span className="text-right rating-area">{props.avgRating}</span></h5>
    <p>{props.cuisines} <span className="text-right">{props.costForTwo}</span></p>
    <p><span className="text-right font-bold">{props.slaString}</span></p>
  </div>    
</div>
  )
}
 const restList = [
       
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "451989",
              "name": "Hyderabadi Handi Biryani",
              "cloudinaryImageId": "0ce0a6d72dd99da1378b978b4019cb0f",
              "locality": "Sector 7",
              "areaName": "Rohini",
              "costForTwo": "₹350 for two",
              "cuisines": [
                "North Indian"
              ],
              "avgRating": 3.7,
              "parentId": "11087",
              "avgRatingString": "3.7",
              "totalRatingsString": "454",
              "promoted": true,
              "adTrackingId": "cid=24294067~p=0~adgrpid=24294067#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=451989~eid=9feb6f27-0fa5-4cb8-b94e-28284791f892~srvts=1738109768787~collid=83639",
              "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 1.9,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "1.9 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-01-29 23:59:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                    "description": "bolt!"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textExtendedBadges": {
                    
                  },
                  "textBased": {
                    
                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                          "description": "bolt!"
                        }
                      }
                    ]
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                },
                "commsStyling": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "24294067"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=451989&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "357476",
              "name": "Dilli 6 Biryani",
              "cloudinaryImageId": "e3fb7ee1b51393225c8d334da16ca63d",
              "locality": "Sec 7",
              "areaName": "Rohini",
              "costForTwo": "₹250 for two",
              "cuisines": [
                "Indian",
                "Biryani",
                "Chinese",
                "Combo"
              ],
              "avgRating": 4,
              "parentId": "72797",
              "avgRatingString": "4.0",
              "totalRatingsString": "1.0K+",
              "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 1.9,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.9 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-01-29 23:59:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                    "description": "bolt!"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {
                    
                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                          "description": "bolt!"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                },
                "commsStyling": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=357476&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "455389",
              "name": "Shama biryani corner",
              "cloudinaryImageId": "56dde9d2a2abe8a9effd6b3afcdfbad0",
              "locality": "Sector 7",
              "areaName": "Rohini",
              "costForTwo": "₹350 for two",
              "cuisines": [
                "Chinese",
                "North Indian",
                "Biryani"
              ],
              "avgRating": 3.7,
              "parentId": "274267",
              "avgRatingString": "3.7",
              "totalRatingsString": "220",
              "promoted": true,
              "adTrackingId": "cid=24291100~p=1~adgrpid=24291100#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=455389~eid=42f3ed3a-355e-4d3b-a6d6-12ad6c201e5c~srvts=1738109768787~collid=83639",
              "sla": {
                "deliveryTime": 20,
                "lastMileTravel": 1.9,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.9 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-01-29 23:59:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                    "description": "bolt!"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "bolt!",
                          "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {
                    
                  },
                  "textBased": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "25% OFF",
                "subHeader": "UPTO ₹125",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                },
                "commsStyling": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "24291100"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=455389&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "180161",
              "name": "Mughlai Biryani",
              "cloudinaryImageId": "3034f9a7a249d158e702525eb044864a",
              "locality": "7Th Sector",
              "areaName": "Rohini",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "Indian",
                "Continental",
                "Snacks"
              ],
              "avgRating": 4.2,
              "parentId": "141033",
              "avgRatingString": "4.2",
              "totalRatingsString": "35",
              "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 1.9,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.9 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-02-05 00:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {
                    
                  },
                  "imageBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                },
                "commsStyling": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=180161&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "785343",
              "name": "One Tap Biryani",
              "cloudinaryImageId": "8832e077339baaddb1267e97f764cd9c",
              "locality": "Jwala Heri",
              "areaName": "Paschim Vihar",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "Biryani",
                "North Indian",
                "Snacks"
              ],
              "avgRating": 4.3,
              "parentId": "418193",
              "avgRatingString": "4.3",
              "totalRatingsString": "179",
              "promoted": true,
              "adTrackingId": "cid=24291148~p=2~adgrpid=24291148#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=785343~eid=b73546b5-ce95-4bab-93cb-376d8e27e357~srvts=1738109768787~collid=83639",
              "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-01-29 23:59:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {
                    
                  },
                  "imageBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                },
                "commsStyling": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "24291148"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=785343&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "170132",
              "name": "Biryani Kingdom",
              "cloudinaryImageId": "kvpgdordpajkrqnole25",
              "locality": "Sector 7",
              "areaName": "Rohini",
              "costForTwo": "₹250 for two",
              "cuisines": [
                "Chinese"
              ],
              "avgRating": 3.1,
              "parentId": "19286",
              "avgRatingString": "3.1",
              "totalRatingsString": "60",
              "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 1.9,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.9 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-01-29 23:59:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textExtendedBadges": {
                    
                  },
                  "textBased": {
                    
                  },
                  "imageBased": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "UPTO ₹40",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                },
                "commsStyling": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=170132&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "451978",
              "name": "Hyderabadi Biryani",
              "cloudinaryImageId": "6f8a820535af1bc8f1598255bbfb2ce1",
              "locality": "Rithala",
              "areaName": "Rohini",
              "costForTwo": "₹350 for two",
              "cuisines": [
                "Biryani",
                "Indian",
                "Chinese",
                "Beverages"
              ],
              "avgRating": 3.5,
              "parentId": "15552",
              "avgRatingString": "3.5",
              "totalRatingsString": "138",
              "promoted": true,
              "adTrackingId": "cid=24069621~p=3~adgrpid=24069621#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=451978~eid=bcd5c191-fade-43ea-8985-fd53054ef255~srvts=1738109768787~collid=83639",
              "sla": {
                "deliveryTime": 21,
                "lastMileTravel": 1.9,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.9 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-01-29 23:59:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                    "description": "bolt!"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                          "description": "bolt!"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {
                    
                  },
                  "textBased": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                },
                "commsStyling": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "24069621"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=451978&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      }
    ]
const OrderFoodComponent = () =>{
  return (
    <div className="food-card-container">
      {
        restList.map(rest => <FoodCard key={rest.card.card.info.id} 
          cloudinaryImageId={rest.card.card.info.cloudinaryImageId}
          name={rest.card.card.info.name} 
          cuisines={rest.card.card.info.cuisines}
          avgRating={rest.card.card.info.avgRating}
          costForTwo={rest.card.card.info.costForTwo}
          slaString={rest.card.card.info.sla.slaString}
        />)
      }     
    </div>
  );
};
const Foodcategory = () => {
  return (
    <>
      <h3 className="cat-heading">What do you looking for?</h3>
      <div className="food-category">
        <div className="category-card">
          <img
            className="cat-img"
            alt="cat-img"
            src="https://img.pikbest.com/png-images/20240512/delicious-spicy-chicken-biryani-png-indian-or-pakistani-food_10561339.png!sw800"
          />
          <h6 className="cat-subheading">Biriyani</h6>
        </div>
        <div className="category-card">
          <img
            className="cat-img"
            alt="cat-img"
            src="https://img.pikbest.com/png-images/20240512/delicious-spicy-chicken-biryani-png-indian-or-pakistani-food_10561339.png!sw800"
          />
          <h6 className="cat-subheading">Biriyani</h6>
        </div>
        <div className="category-card">
          <img
            className="cat-img"
            alt="cat-img"
            src="https://img.pikbest.com/png-images/20240512/delicious-spicy-chicken-biryani-png-indian-or-pakistani-food_10561339.png!sw800"
          />
          <h6 className="cat-subheading">Biriyani</h6>
        </div>
        <div className="category-card">
          <img
            className="cat-img"
            alt="cat-img"
            src="https://img.pikbest.com/png-images/20240512/delicious-spicy-chicken-biryani-png-indian-or-pakistani-food_10561339.png!sw800"
          />
          <h6 className="cat-subheading">Biriyani</h6>
        </div>
        <div className="category-card">
          <img
            className="cat-img"
            alt="cat-img"
            src="https://img.pikbest.com/png-images/20240512/delicious-spicy-chicken-biryani-png-indian-or-pakistani-food_10561339.png!sw800"
          />
          <h6 className="cat-subheading">Biriyani</h6>
        </div>
        <div className="category-card">
          <img
            className="cat-img"
            alt="cat-img"
            src="https://img.pikbest.com/png-images/20240512/delicious-spicy-chicken-biryani-png-indian-or-pakistani-food_10561339.png!sw800"
          />
          <h6 className="cat-subheading">Biriyani</h6>
        </div>
        <div className="category-card">
          <img
            className="cat-img"
            alt="cat-img"
            src="https://img.pikbest.com/png-images/20240512/delicious-spicy-chicken-biryani-png-indian-or-pakistani-food_10561339.png!sw800"
          />
          <h6 className="cat-subheading">Biriyani</h6>
        </div>
      </div>
    </>
  );
};

const BodyComponent = () => {
  return (
    <div className="main-container">
      <Foodcategory />
      {heading}
      <OrderFoodComponent />
    </div>
  );
};
const AppComponent = () => {
  return (
    <div className="app-container">
      <Header />
      <BodyComponent />
    </div>
  );
};
const root = createRoot(document.getElementById("root"));
root.render(<AppComponent />);
