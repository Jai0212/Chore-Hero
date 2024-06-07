import cart from './cart.png'
import logo from './logo.png'
import search_icon from './search_icon.png'
import profile_icon from './profile_icon.png'
import header_image from './header_image.png'
import cross_icon from './cross_icon.png'
import orders_icon from './orders_icon.png'
import logout_icon from './logout_icon.png'

import appliance_repair from './appliance_repair.jpeg'
import car_cleaning from './car_cleaning.jpeg'
import carpentry from './carpentry.jpeg'
import cleaning from './cleaning.jpeg'
import customize from './customize.jpeg'
import delivery from './delivery.jpeg'
import dog_walking from './dog_walking.jpeg'
import electrician from './electrician.jpeg'
import gardening from './gardening.jpeg'
import laundry from './laundry.jpeg'
import mechanic from './mechanic.jpeg'
import plumber from './plumber.jpeg'
import pool_cleaning from './pool_cleaning.jpeg'
import snow_removing from './snow_removing.jpeg'
import baby_sitting from './baby_sitting.jpg'
import private_chef from './private_chef.jpeg'

import placeholder_image_1 from './placeholder_image_1.jpg'
import placeholder_image_2 from './placeholder_image_2.jpg'
import placeholder_image_3 from './placeholder_image_3.jpg'
import placeholder_image_4 from './placeholder_image_4.jpg'
import placeholder_image_5 from './placeholder_image_5.jpg'
import placeholder_image_6 from './placeholder_image_6.jpeg'

export const assets = {
    cart,
    logo,
    search_icon,
    profile_icon,
    appliance_repair,
    car_cleaning,
    carpentry,
    cleaning,
    customize,
    delivery,
    dog_walking,
    electrician,
    gardening,
    laundry,
    mechanic,
    plumber,
    pool_cleaning,
    snow_removing,
    baby_sitting,
    header_image,
    private_chef,
    cross_icon,
    orders_icon,
    logout_icon
}

export const list_of_heroes = [
    {
        hero_name: "Alex",
        hero_image: placeholder_image_1
    },
    {
        hero_name: "Bianca",
        hero_image: placeholder_image_5
    },
    {
        hero_name: "Charlie",
        hero_image: placeholder_image_4
    },
    {
        hero_name: "David",
        hero_image: placeholder_image_6
    },
    {
        hero_name: "Evelyn",
        hero_image: placeholder_image_3
    },
    {
        hero_name: "Frank",
        hero_image: placeholder_image_1
    },
    {
        hero_name: "Grace",
        hero_image: placeholder_image_5
    },
    {
        hero_name: "Hannah",
        hero_image: placeholder_image_3
    },
    {
        hero_name: "Isaac",
        hero_image: placeholder_image_2
    },
    {
        hero_name: "Jack",
        hero_image: placeholder_image_4
    }
]

export const getHeroImage = (heroName) => {
    const hero = list_of_heroes.find(h => h.hero_name === heroName);
    return hero ? hero.hero_image : null;
};

export const services = [
    {
        service_name: "Cleaning",
        service_image: cleaning
    },
    {
        service_name: "Carpentry",
        service_image: carpentry
    },
    {
        service_name: "Plumbing",
        service_image: plumber
    },
    {
        service_name: "Baby Sitting",
        service_image: baby_sitting
    },
    {
        service_name: "Appliance Repair",
        service_image: appliance_repair
    },
    {
        service_name: "Laundry",
        service_image: laundry
    },
    {
        service_name: "Electrician",
        service_image: electrician
    },
    {
        service_name: "Mechanic",
        service_image: mechanic
    },
    {
        service_name: "Pool Cleaning",
        service_image: pool_cleaning
    },
    {
        service_name: "Private Chef",
        service_image: private_chef
    },
    {
        service_name: "Snow Removing",
        service_image: snow_removing
    },
    {
        service_name: "Gardening",
        service_image: gardening
    },
    {
        service_name: "Dog Walking",
        service_image: dog_walking
    },
    {
        service_name: "Delivery",
        service_image: delivery
    },
    {
        service_name: "Car Cleaning",
        service_image: car_cleaning
    },
    {
        service_name: "Custom Service",
        service_image: customize
    }]

export const services_list = [
    {
        service_image: cleaning,
        service_name: "Cleaning",
        service_description: "Clean my whole house",
        service_price: "10",
    }]

export const services_to_image = [
    { service_name: "Cleaning", service_image: cleaning, cost: 50, description: "", date: "", time: "" },
    { service_name: "Carpentry", service_image: carpentry, cost: 100, description: "", date: "", time: "" },
    { service_name: "Plumbing", service_image: plumber, cost: 80, description: "", date: "", time: "" },
    { service_name: "Baby Sitting", service_image: baby_sitting, cost: 15, description: "", date: "", time: "" },
    { service_name: "Appliance Repair", service_image: appliance_repair, cost: 70, description: "", date: "", time: "" },
    { service_name: "Laundry", service_image: laundry, cost: 20, description: "", date: "", time: "" },
    { service_name: "Electrician", service_image: electrician, cost: 90, description: "", date: "", time: "" },
    { service_name: "Mechanic", service_image: mechanic, cost: 120, description: "", date: "", time: "" },
    { service_name: "Pool Cleaning", service_image: pool_cleaning, cost: 60, description: "", date: "", time: "" },
    { service_name: "Private Chef", service_image: private_chef, cost: 200, description: "", date: "", time: "" },
    { service_name: "Snow Removing", service_image: snow_removing, cost: 50, description: "", date: "", time: "" },
    { service_name: "Gardening", service_image: gardening, cost: 40, description: "", date: "", time: "" },
    { service_name: "Dog Walking", service_image: dog_walking, cost: 25, description: "", date: "", time: "" },
    { service_name: "Delivery", service_image: delivery, cost: 30, description: "", date: "", time: "" },
    { service_name: "Car Cleaning", service_image: car_cleaning, cost: 45, description: "", date: "", time: "" },
    { service_name: "Custom Service", service_image: customize, cost: 150, description: "", date: "", time: "" }
];

export const getServiceImage = (serviceName) => {
    const service = services_to_image.find(s => s.service_name === serviceName);
    return service ? service.service_image : null;
};

export const getServiceCost = (serviceName) => {
    const service = services_to_image.find(service => service.service_name === serviceName);
    return service ? service.cost : null;
};

// export const food_list = [
//     {
//         _id: "1",
//         name: "Greek salad",
//         image: food_1,
//         price: 12,
//         description: "Food provides essential nutrients for overall health and well-being",
//         category: "Salad"
//     },
//     {
//         _id: "2",
//         name: "Veg salad",
//         image: food_2,
//         price: 18,
//         description: "Food provides essential nutrients for overall health and well-being",
//         category: "Salad"
//     }, {
//         _id: "3",
//         name: "Clover Salad",
//         image: food_3,
//         price: 16,
//         description: "Food provides essential nutrients for overall health and well-being",
//         category: "Salad"
//     }, {
//         _id: "4",
//         name: "Chicken Salad",
//         image: food_4,
//         price: 24,
//         description: "Food provides essential nutrients for overall health and well-being",
//         category: "Salad"
//     }, {
//         _id: "5",
//         name: "Lasagna Rolls",
//         image: food_5,
//         price: 14,
//         description: "Food provides essential nutrients for overall health and well-being",
//         category: "Rolls"
//     }, {
//         _id: "6",
//         name: "Peri Peri Rolls",
//         image: food_6,
//         price: 12,
//         description: "Food provides essential nutrients for overall health and well-being",
//         category: "Rolls"
//     }, {
//         _id: "7",
//         name: "Chicken Rolls",
//         image: food_7,
//         price: 20,
//         description: "Food provides essential nutrients for overall health and well-being",
//         category: "Rolls"
//     }, {
//         _id: "8",
//         name: "Veg Rolls",
//         image: food_8,
//         price: 15,
//         description: "Food provides essential nutrients for overall health and well-being",
//         category: "Rolls"
//     }, {
//         _id: "9",
//         name: "Ripple Ice Cream",
//         image: food_9,
//         price: 14,
//         description: "Food provides essential nutrients for overall health and well-being",
//         category: "Deserts"
//     }, {
//         _id: "10",
//         name: "Fruit Ice Cream",
//         image: food_10,
//         price: 22,
//         description: "Food provides essential nutrients for overall health and well-being",
//         category: "Deserts"
//     }, {
//         _id: "11",
//         name: "Jar Ice Cream",
//         image: food_11,
//         price: 10,
//         description: "Food provides essential nutrients for overall health and well-being",
//         category: "Deserts"
//     }, {
//         _id: "12",
//         name: "Vanilla Ice Cream",
//         image: food_12,
//         price: 12,
//         description: "Food provides essential nutrients for overall health and well-being",
//         category: "Deserts"
//     },
//     {
//         _id: "13",
//         name: "Chicken Sandwich",
//         image: food_13,
//         price: 12,
//         description: "Food provides essential nutrients for overall health and well-being",
//         category: "Sandwich"
//     },
//     {
//         _id: "14",
//         name: "Vegan Sandwich",
//         image: food_14,
//         price: 18,
//         description: "Food provides essential nutrients for overall health and well-being",
//         category: "Sandwich"
//     }, {
//         _id: "15",
//         name: "Grilled Sandwich",
//         image: food_15,
//         price: 16,
//         description: "Food provides essential nutrients for overall health and well-being",
//         category: "Sandwich"
//     }, {
//         _id: "16",
//         name: "Bread Sandwich",
//         image: food_16,
//         price: 24,
//         description: "Food provides essential nutrients for overall health and well-being",
//         category: "Sandwich"
//     }, {
//         _id: "17",
//         name: "Cup Cake",
//         image: food_17,
//         price: 14,
//         description: "Food provides essential nutrients for overall health and well-being",
//         category: "Cake"
//     }, {
//         _id: "18",
//         name: "Vegan Cake",
//         image: food_18,
//         price: 12,
//         description: "Food provides essential nutrients for overall health and well-being",
//         category: "Cake"
//     }, {
//         _id: "19",
//         name: "Butterscotch Cake",
//         image: food_19,
//         price: 20,
//         description: "Food provides essential nutrients for overall health and well-being",
//         category: "Cake"
//     }, {
//         _id: "20",
//         name: "Sliced Cake",
//         image: food_20,
//         price: 15,
//         description: "Food provides essential nutrients for overall health and well-being",
//         category: "Cake"
//     }, {
//         _id: "21",
//         name: "Garlic Mushroom ",
//         image: food_21,
//         price: 14,
//         description: "Food provides essential nutrients for overall health and well-being",
//         category: "Pure Veg"
//     }, {
//         _id: "22",
//         name: "Fried Cauliflower",
//         image: food_22,
//         price: 22,
//         description: "Food provides essential nutrients for overall health and well-being",
//         category: "Pure Veg"
//     }, {
//         _id: "23",
//         name: "Mix Veg Pulao",
//         image: food_23,
//         price: 10,
//         description: "Food provides essential nutrients for overall health and well-being",
//         category: "Pure Veg"
//     }, {
//         _id: "24",
//         name: "Rice Zucchini",
//         image: food_24,
//         price: 12,
//         description: "Food provides essential nutrients for overall health and well-being",
//         category: "Pure Veg"
//     },
//     {
//         _id: "25",
//         name: "Cheese Pasta",
//         image: food_25,
//         price: 12,
//         description: "Food provides essential nutrients for overall health and well-being",
//         category: "Pasta"
//     },
//     {
//         _id: "26",
//         name: "Tomato Pasta",
//         image: food_26,
//         price: 18,
//         description: "Food provides essential nutrients for overall health and well-being",
//         category: "Pasta"
//     }, {
//         _id: "27",
//         name: "Creamy Pasta",
//         image: food_27,
//         price: 16,
//         description: "Food provides essential nutrients for overall health and well-being",
//         category: "Pasta"
//     }, {
//         _id: "28",
//         name: "Chicken Pasta",
//         image: food_28,
//         price: 24,
//         description: "Food provides essential nutrients for overall health and well-being",
//         category: "Pasta"
//     }, {
//         _id: "29",
//         name: "Buttter Noodles",
//         image: food_29,
//         price: 14,
//         description: "Food provides essential nutrients for overall health and well-being",
//         category: "Noodles"
//     }, {
//         _id: "30",
//         name: "Veg Noodles",
//         image: food_30,
//         price: 12,
//         description: "Food provides essential nutrients for overall health and well-being",
//         category: "Noodles"
//     }, {
//         _id: "31",
//         name: "Somen Noodles",
//         image: food_31,
//         price: 20,
//         description: "Food provides essential nutrients for overall health and well-being",
//         category: "Noodles"
//     }, {
//         _id: "32",
//         name: "Cooked Noodles",
//         image: food_32,
//         price: 15,
//         description: "Food provides essential nutrients for overall health and well-being",
//         category: "Noodles"
//     }
// ]
