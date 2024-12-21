<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delightful Bites Restaurant</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* Custom Animations */
        .fade-in {
            animation: fadeIn 1.5s ease-in-out;
        }

        .slide-up {
            animation: slideUp 1s ease-out;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        @keyframes slideUp {
            from {
                transform: translateY(20px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
    </style>
</head>
<body class="bg-gray-50 font-sans">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg sticky top-0 z-50">
        <div class="container mx-auto px-6 py-4 flex justify-between items-center fade-in">
            <a href="#" class="text-2xl font-bold text-green-600 hover:text-green-800">Delightful Bites</a>
            <div class="space-x-6">
                <a href="#menu" class="text-gray-800 hover:text-green-600 transition duration-300">Menu</a>
                <a href="#about" class="text-gray-800 hover:text-green-600 transition duration-300">About</a>
                <a href="#gallery" class="text-gray-800 hover:text-green-600 transition duration-300">Gallery</a>
                <a href="#contact" class="text-gray-800 hover:text-green-600 transition duration-300">Contact</a>
                <button id="cart-btn" class="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition duration-300">
                    Cart (<span id="cart-count">0</span>)
                </button>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <header class="bg-cover bg-center h-[600px] relative" style="background-image: url('https://source.unsplash.com/1200x800/?restaurant');">
        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div class="text-center text-white p-8 rounded-lg slide-up">
                <h1 class="text-5xl font-extrabold mb-4">Welcome to Delightful Bites</h1>
                <p class="text-2xl">Exquisite Cuisine, Unforgettable Experience</p>
                <a href="#menu" class="inline-block mt-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition duration-300">
                    Explore Menu
                </a>
            </div>
        </div>
    </header>

    <!-- Menu Section -->
    <section id="menu" class="container mx-auto my-16 px-6">
        <h2 class="text-4xl font-bold text-center mb-10 fade-in">Our Menu</h2>
        <div id="menu-items" class="grid md:grid-cols-3 gap-8">
            <!-- Menu items will be dynamically added here -->
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="container mx-auto my-16 px-6">
        <h2 class="text-4xl font-bold text-center mb-10 fade-in">About Us</h2>
        <p class="text-lg text-gray-700 text-center max-w-3xl mx-auto fade-in">
            At Delightful Bites, we are dedicated to providing exceptional culinary experiences that delight your taste buds and leave a lasting impression. Our team of experienced chefs uses the freshest ingredients to create dishes that are as delicious as they are memorable. Join us for a dining experience like no other!
        </p>
    </section>

    <!-- Gallery Section -->
    <section id="gallery" class="container mx-auto my-16 px-6">
        <h2 class="text-4xl font-bold text-center mb-10 fade-in">Gallery</h2>
        <div class="grid md:grid-cols-3 gap-6 fade-in">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrALs2gUhSyftPQPc_B5evmTp57gVEoGaouw&s" alt="Restaurant Interior" class="rounded-lg shadow-md">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHzIu1xsyWd4cBCkwvqdEQQgwfb3rrYC28vQ&s" alt="Dining Table" class="rounded-lg shadow-md">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4tXj_PGb1vPThrUndOWdRGR_EQieIlUwZtA&s" alt="Chef at Work" class="rounded-lg shadow-md">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMFIqm-v9UtnUnOrPFFEc2Z7izl1OtdP-mvg&s" alt="Beautiful Lighting" class="rounded-lg shadow-md">
            <img src="https://t3.ftcdn.net/jpg/02/60/12/88/360_F_260128861_Q2ttKHoVw2VrmvItxyCVBnEyM1852MoJ.jpg" alt="Delicious Food" class="rounded-lg shadow-md">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDbsMYPhDbzF8k8TVVha_81HCmapOwFtymDw&s" alt="Modern Kitchen" class="rounded-lg shadow-md">
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="container mx-auto my-16 px-6">
        <h2 class="text-4xl font-bold text-center mb-10 fade-in">Contact Us</h2>
        <form class="max-w-lg mx-auto space-y-6 fade-in">
            <div>
                <label for="name" class="block text-gray-700 font-bold mb-2">Name:</label>
                <input type="text" id="name" class="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Your Name" required>
            </div>
            <div>
                <label for="email" class="block text-gray-700 font-bold mb-2">Email:</label>
                <input type="email" id="email" class="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Your Email" required>
            </div>
            <div>
                <label for="message" class="block text-gray-700 font-bold mb-2">Message:</label>
                <textarea id="message" class="w-full p-3 border rounded h-32 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" class="w-full bg-green-500 text-white py-3 rounded-lg shadow hover:bg-green-600 transition duration-300">
                Send Message
            </button>
        </form>
    </section>

    <!-- Location Section -->
    <section id="location" class="container mx-auto my-16 px-6">
        <h2 class="text-4xl font-bold text-center mb-10 fade-in">Our Location</h2>
        <div id="map" class="w-full h-96 fade-in">
            <iframe 
                src="https://www.openstreetmap.org/export/embed.html?bbox=-73.947582%2C40.719438%2C-73.922874%2C40.741629&layer=mapnik&marker=40.730534%2C-73.935228" 
                style="border:0; width: 100%; height: 100%;" 
                allowfullscreen="" 
                loading="lazy">
            </iframe>
        </div>
    </section>

    <!-- Cart Modal -->
    <div id="cart-modal" class="fixed inset-0 bg-black bg-opacity-50 hidden z-50 flex items-center justify-center">
        <div class="bg-white rounded-lg p-8 max-w-lg w-full transform scale-95 transition-transform duration-300">
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-2xl font-bold">Your Cart</h2>
                <button id="close-cart" class="text-red-500 hover:text-red-700">Close</button>
            </div>
            <div id="cart-items" class="space-y-4 mb-4">
                <!-- Cart items will be dynamically added here -->
            </div>
            <div class="border-t pt-4">
                <div class="flex justify-between mb-4">
                    <span class="font-bold">Total:</span>
                    <span id="cart-total">$0.00</span>
                </div>
                <button id="checkout-btn" class="w-full bg-green-500 text-white py-3 rounded-lg shadow hover:bg-green-600 transition duration-300">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    </div>

    <script>
        // Menu Items Data
        const menuItems = [
            { id: 1, name: 'Margherita Pizza', price: 12.99, image: 'https://ca.ooni.com/cdn/shop/articles/20220211142645-margherita-9920.jpg?crop=center&height=915&v=1661341987&width=1200' },
            { id: 2, name: 'Caesar Salad', price: 8.50, image: 'https://cdn.loveandlemons.com/wp-content/uploads/2024/12/caesar-salad.jpg' },
            { id: 3, name: 'Grilled Salmon', price: 18.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnC2p7osU5rqS-9mXW8IVtilKYpAMKQPWdxw&s' },
            { id: 4, name: 'Vegetarian Pasta', price: 14.50, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKJHMs4My3OUj4hgaGObfXZI1bUasnd5oUhg&s' },
            { id: 5, name: 'Chicken Burger', price: 11.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqVL56hNet6FNNKXkL6KaPyUZ7iz1ePMsh5g&s' },
            { id: 6, name: 'Chocolate Brownie', price: 6.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUgLs3F7VS7IYwO8D3-lI2hC76Lzic792YUg&s' }
        ];

        // Cart Management
        let cart = [];

        function renderMenuItems() {
            const menuContainer = document.getElementById('menu-items');
            menuContainer.innerHTML = menuItems.map(item => `
                <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                    <img src="${item.image}" alt="${item.name}" class="w-full h-48 object-cover">
                    <div class="p-4">
                        <h3 class="font-bold text-lg mb-2">${item.name}</h3>
                        <div class="flex justify-between items-center">
                            <span class="text-green-600 font-bold">$${item.price.toFixed(2)}</span>
                            <button onclick="addToCart(${item.id})" class="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition duration-300">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        function addToCart(itemId) {
            const item = menuItems.find(i => i.id === itemId);
            const existingItem = cart.find(i => i.id === itemId);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ ...item, quantity: 1 });
            }

            updateCart();
        }

        function updateCart() {
            const cartCount = document.getElementById('cart-count');
            const cartItems = document.getElementById('cart-items');
            const cartTotal = document.getElementById('cart-total');

            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

            cartCount.textContent = totalItems;
            cartItems.innerHTML = cart.map(item => `
                <div class="flex justify-between items-center">
                    <span>${item.name} x ${item.quantity}</span>
                    <span>$${(item.price * item.quantity).toFixed(2)}</span>
                </div>
            `).join('');

            cartTotal.textContent = $${total.toFixed(2)};
        }

        // Cart Modal Functionality
        document.getElementById('cart-btn').addEventListener('click', () => {
            const modal = document.getElementById('cart-modal');
            modal.classList.remove('hidden');
            modal.querySelector('div').classList.remove('scale-95');
        });

        document.getElementById('close-cart').addEventListener('click', () => {
            const modal = document.getElementById('cart-modal');
            modal.classList.add('hidden');
            modal.querySelector('div').classList.add('scale-95');
        });

        document.getElementById('checkout-btn').addEventListener('click', () => {
            alert('Thanks for ordering! Your order is being processed.');
            document.getElementById('cart-modal').classList.add('hidden');
        });

        // Initialize Menu
        renderMenuItems();
    </script>
</body>
</html>
//This project is about billing machine in HAV super market.
//This supermarket has 20 items.
//in this supermarket we have coupons namely hav50,hav100,hav300 and if we use them Rs:50,100,300 will be deducted from the total amount.
//in this code we will take the items code as input and we calculate the total amount and add the gst amount.
//if the buyer has coupon we will reduce the respective amounts from the total.
import java.util.*;
class assign{
    String item;
    int n=1;
    float []iarr= new float[20];
    String []sarr= new String[20];
    float []garr= new float[20];
    //assigning items,price and gst amount into the respective arrays
    void item1(){
        n++;
        sarr[n-1]="chips";
        iarr[n-1]= 20; 
        garr[n-1]=1;
    }
    void item2(){
        n++;
        sarr[n-1]= "pens";
        iarr[n-1]=40;
        garr[n-1]=2;
    }
    void item3(){
        n++;
        sarr[n-1]= "toffee";
        iarr[n-1]= 5;
        garr[n-1]=0.25f;
    }
    void item4(){
        n++;
        sarr[n-1]= "book";
        iarr[n-1]= 30;
        garr[n-1]=1.50f;
    }
    void item5(){
        n++;
        sarr[n-1]= "milk";
        iarr[n-1]= 22.5f;
        garr[n-1]=1.13f;
    }
    void item6(){
        n++;
        sarr[n-1]= "flour";
        iarr[n-1]= 35;
        garr[n-1]= 1.75f;
    }
    void item7(){
        n++;
        sarr[n-1]= "egg carton";
        iarr[n-1]= 100;
        garr[n-1]=5;
    }
    void item8(){
        n++;
        sarr[n-1]= "pan";
        iarr[n-1]= 300;
        garr[n-1]=15;
    }
    void item9(){
        n++;
        sarr[n-1]= "bread";
        iarr[n-1]= 35;
        garr[n-1]=1.75f;
    }
    void item10(){
        n++;
        sarr[n-1]= "box";
        iarr[n-1]= 65;
        garr[n-1]=3.25f;
    }
    void item11(){
        n++;
        sarr[n-1]= "vegetables";
        iarr[n-1]= 60;
        garr[n-1]=3;
    }
    void item12(){
        n++;
        sarr[n-1]= "kitchen tools";
        iarr[n-1]= 159.9f;
        garr[n-1]=8;
    }
    void item13(){
        n++;
        sarr[n-1]= "cleaner";
        iarr[n-1]= 210;
        garr[n-1]=10.5f;
    }
    void item14(){
        n++;
        sarr[n-1]= "soda";
        iarr[n-1]= 35;
        garr[n-1]=1.75f;
    }
    void item15(){
        n++;
        sarr[n-1]= "toothpaste";
        iarr[n-1]= 40;
        garr[n-1]=2;
    }
    void item16(){
        n++;
        sarr[n-1]= "soap";
        iarr[n-1]= 50;
        garr[n-1]=2.50f;
    }
    void item17(){
        n++;
        sarr[n-1]= "battery";
        iarr[n-1]= 20;
        garr[n-1]=1;
    }
    void item18(){
        n++;
        sarr[n-1]= "fruit platter";
        iarr[n-1]= 40;
        garr[n-1]=2;
    }
    void item19(){
        n++;
        sarr[n-1]= "toilet paper";
        iarr[n-1]= 25;
        garr[n-1]=1.25f;
    }
    void item20(){
        n++;
        sarr[n-1]= "water bottle";
        iarr[n-1]= 20;
        garr[n-1]=1;
    }
    //creating a function to print the bill
    void printbill(){
        float sum=0;
        float gst=0;
        float gtotal;
        String coupon;
        Scanner s=new Scanner(System.in);
        //taking the coupon code as input
        System.out.println("enter the coupon code:");
        coupon=s.nextLine();
        System.out.println();
        System.out.printf("%55s\n","HAV supermarket");
        //formatting the bill
        System.out.printf("%-15s %8s %20s %26s %38s\n","S.No","Item","Price","Gst","Total Amt(Inc. GST)");
        System.out.println("-----------------------------------------------------------------------------------------------------------------");
        for(int i=1; i<n; i++){
            System.out.printf("%-15d %8s %18.2f %26.2f %32.2f\n",i,sarr[i],iarr[i],garr[i],(iarr[i]+garr[i]));
        }
        //calculating the sum and gst for the entered items
        for(int i=1; i<n; i++){
            sum = sum + iarr[i];
            gst = gst + garr[i];
        }
        gtotal=sum+gst;
        System.out.println("-----------------------------------------------------------------------------------------------------------------");
        System.out.printf("%-15s %27.2f %27.2f %33.2f\n","Total:",sum,gst,gtotal);
        System.out.println("-----------------------------------------------------------------------------------------------------------------");
        //giving rupees 50 or 100 or 300 as discount depending on the coupon
        String coupon50= "hav50";
        String coupon100="hav100";
        String coupon300="hav300";
        //verifying the coupon codes and reducing the amount
        if(coupon.equals(coupon50)){
            System.out.println("Voucher Discount:  " +50);
            gtotal-=50;
        }
        if(coupon.equals(coupon100)){
            System.out.println("Voucher Discount:  " +100);
            gtotal-=100;
        }
        if(coupon.equals(coupon300)){
            System.out.println("Voucher Discount:  " +300);
            gtotal-=300;
        }
        else{
            System.out.printf("%-15s %5.3f\n","Grand Total:",gtotal);
        }
        System.out.println("-----------------------------------------------------------------------------------------------------------------");
        System.out.printf("%58s","Thank you.");
}
}
public class proj3{
    public static void main(String[] args) {
        Scanner code = new Scanner(System.in);
        assign r= new assign();
        //assigning the codes for the items
        String c1="asas123";
        String c2= "qwqw234";
        String c3= "zxzx345";
        String c4="sdsd456";
        String c5="erer567";
        String c6="rtrt678";
        String c7="tyty789";
        String c8="uiui890";
        String c9="ioio901";
        String c10="opop012";
        String c11="lklk123";
        String c12="kjkj234";
        String c13="jhjh345";
        String c14="hghg456";
        String c15="uyuy567";
        String c16="lklk768";
        String c17="ytyt123";
        String c18="hghg890";
        String c19="xzxz657";
        String c20="sasa234";
        String c21="stop";
        //checking if the entered code matches with the item code
        while(true){
            System.out.println("Write the code:");
            String code1= code.nextLine();
            if(!(code1.equals(c21))){
                if(code1.equals(c1)){
                    r.item1();
                }
                else if(code1.equals(c2)){
                    r.item2();
                }
                else if(code1.equals(c3)){
                    r.item3();
                }
                else if(code1.equals(c4)){
                    r.item4();
                }
                else if(code1.equals(c5)){
                    r.item5();
                }
                else if(code1.equals(c6)){
                    r.item6();
                }
                else if(code1.equals(c7)){
                    r.item7();
                }
                else if(code1.equals(c8)){
                    r.item8();
                }
                else if(code1.equals(c9)){
                    r.item9();
                }
                else if (code1.equals(c10)){
                    r.item10();
                }
                else if (code1.equals(c11)){
                    r.item11();
                }
                else if (code1.equals(c12)){
                    r.item12();
                }
                else if (code1.equals(c13)){
                    r.item13();
                }
                else if (code1.equals(c14)){
                    r.item14();
                }
                else if (code1.equals(c15)){
                    r.item15();
                }
                else if (code1.equals(c16)){
                    r.item16();
                }
                else if (code1.equals(c17)){
                    r.item17();
                }
                else if (code1.equals(c18)){
                    r.item18();
                }
                else if (code1.equals(c19)){
                    r.item19();
                }
                else if (code1.equals(c20)){
                    r.item20();
                }
                else{
                    System.out.println("error");
                }
            }
            else{
                break;
            }
        }
        //calling the function to print the bill
        r.printbill();             
    }
}
// Navbar
  let menu = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');

  menu.onclick = () => {
      navbar.classList.toggle('active');
  }

  window.onscroll = () => {
      navbar.classList.remove('active');
  }
  // Dark Mode
  let darkmode = document.querySelector('#darkmode');

  darkmode.onclick = () => {
      if(darkmode.classList.contains('bx-moon')){
          darkmode.classList.replace('bx-moon','bx-sun');
          document.body.classList.add('active');
      }else{
          darkmode.classList.replace('bx-sun','bx-moon');
          document.body.classList.remove('active');
      }
  }

  // Scroll Reveal
  const sr = ScrollReveal ({
      origin: 'top',
      distance: '40px',
      duration: 2000,
      reset: true
  });


  sr.reveal(`.home-text, .home-img,
              .about-img, .about-text,
              .box, .s-box,
              .btn, .connect-text,
              .contact-box`, {
      interval: 200
  })
/* Google Fonts */
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
  * {
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
    box-sizing: border-box;
    scroll-behavior: smooth;
    scroll-padding-top: 2rem;
    list-style: none;
    text-decoration: none;
  }
  *::selection {
    background: var(--main-color);
    color: #fff;
  }
  :root {
    --main-color: #ffb411;
    --text-color: #1e1c2a;
    --bg-color: #fff;

    --big-font: 4rem;
    --h2-font: 2.24rem;
    --p-font: 0.9rem;
  }
  section {
    padding: 50px 10%;
  }
  body.active {
    --bg-color: #1e1c2a;
    --text-color: #fff;
  }
  body {
    color: var(--text-color);
    background: var(--bg-color);
  }
  #darkmode {
    font-size: 25px;
    cursor: pointer;
  }
  header {
    position: fixed;
    width: 100%;
    top: 0;
    right: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--bg-color);
    padding: 18px 100px;
    box-shadow: 0 0.5rem 50rem rgba(0, 0, 0, 0.1);
  }
  .logo {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--main-color);
  }
  .navbar {
    display: flex;
  }
  .navbar a {
    font-size: 1rem;
    padding: 10px 20px;
    color: var(--text-color);
    font-weight: 500;
  }
  .navbar a:hover {
    color: var(--main-color);
  }
  #menu-icon {
    font-size: 2rem;
    cursor: pointer;
    display: none;
  }
  .home {
    width: 100%;
    min-height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 1.5rem;
  }
  .home-img img {
    width: 100%;
  }
  .home-text h1 {
    font-size: var(--big-font);
    color: var(--main-color);
  }
  .home-text h2 {
    font-size: var(--h2-font);
    margin: 1rem 0 1rem;
  }
  .btn {
    display: inline-block;
    background: var(--main-color);
    padding: 10px 20px;
    border-radius: 0.5rem;
    color: #fff;
  }
  .btn:hover {
    background: #ffa400;
  }
  .about {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    align-items: center;
  }
  .about-img img {
    max-width: 80%;
    border-radius: 0.5rem;
  }
  .about-text span {
    color: var(--main-color);
    font-weight: 500;
  }
  .about-text h2 {
    font-size: var(--h2-font);
  }
  .about-text p {
    margin: 0.8rem 0 1.8rem;
  }
  .heading {
    text-align: center;
  }
  .heading span {
    color: var(--main-color);
    font-weight: 500;
  }
  .heading h2 {
    font-size: var(--h2-font);
  }
  .menu-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, auto));
    gap: 1.5rem;
    align-items: center;
  }
  .box {
    position: relative;
    margin-top: 2rem;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgb(4 64 54 / 10%);
    padding: 10px;
  }
  .box-img {
    width: 200px;
    height: 200px;
  }
  .box-img img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
  .box h2 {
    font-size: 1.2rem;
  }
  .box h3 {
    font-size: 1rem;
    font-weight: 400;
    margin: 4px 0 10px;
  }
  .box span {
    font-size: var(--p-font);
    font-weight: 500;
  }
  .box .bx {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 20px;
    background: var(--main-color);
    border-radius: 0 0.5rem 0 0.5rem;
    padding: 5px 8px;
  }
  .box .bx:hover {
    background: #ffa400;
  }
  .servives-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, auto));
    gap: 1.5rem;
    margin-top: 2rem;
  }
  .s-box {
    text-align: center;
  }
  .s-box img {
    width: 60px;
  }
  .s-box h3 {
    margin: 4px 0 10px;
  }
  .connect {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .connect-text span {
    color: var(--main-color);
    font-weight: 500;
  }
  .connect-text h2 {
    font-size: var(--h2-font);
  }
  .contact {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, auto));
    gap: 1.5rem;
  }
  .contact-box h3 {
    margin-bottom: 1rem;
  }
  .social {
    display: flex;
    margin-top: 1.5rem;
  }
  .social i {
    font-size: 20px;
    margin-right: 1rem;
    color: var(--text-color);
  }
  .social i:hover {
    color: var(--main-color);
  }
  .contact-box li a {
    color: var(--text-color);
  }
  .contact-box li a:hover {
    color: var(--main-color);
  }
  .address {
    display: flex;
    flex-direction: column;
  }
  .address i {
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }
  .address span {
    margin-left: 1rem;
  }
  .copyright {
    padding: 20px;
    text-align: center;
  }
  @media (max-width: 921px) {
    header {
      padding: 14px 41px;
    }
    :root {
      --big-font: 3rem;
      --h2-font: 1.7rem;
    }
  }
  @media (max-width: 768px) {
    section {
      padding: 50px 8%;
    }
    #menu-icon {
      display: initial;
      color: var(--text-color);
    }
    header .navbar {
      position: absolute;
      top: -400px;
      left: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      text-align: center;
      background: var(--bg-color);
      box-shadow: 0 4px 4px rgb(0 0 0 / 10%);
      transition: 0.2s ease;
    }
    .navbar.active {
      top: 100%;
    }
    .navbar a {
      padding: 1.5rem;
      display: block;
      background: var(--bg-color);
    }
    #darkmode {
      position: absolute;
      top: 1.4rem;
      right: 2rem;
    }
  }
  @media (max-width: 715px) {
    header {
      padding: 10px 16px;
    }
    .home {
      grid-template-columns: 1fr;
    }
    .about {
      grid-template-columns: 1fr;
      text-align: center;
    }
    .about-img {
      order: 2;
    }
  }
  @media (max-width: 515px) {
    .connect {
      flex-direction: column;
    }
    .connect .btn {
      margin-top: 1rem;
    }
  }
  @media (max-width: 450px) {
    :root {
      --big-font: 2rem;
      --h2-font: 1.4rem;
    }
    .home-text {
      padding-top: 4rem;
    }
  }
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Pizza Landing Page</title>
    <!-- Box Icons -->
    <link rel="stylesheet"
  href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">
  <!-- Link To CSS -->
  <link rel="stylesheet" href="code.css">

</head>
<body>
    <!-- Navbar -->
    <header>
        <a href="#" class="logo">Pizza Pie</a>
        <div class="bx bx-menu" id="menu-icon"></div>

        <ul class="navbar">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#services">Service</a></li>
            <li><a href="#contact">Contact</a></li>
            <!-- Dark Mode -->
            <div class="bx bx-moon" id="darkmode"></div>
        </ul>
    </header>
    <!-- Home  Section-->
    <section class="home" id="home">
        <div class="home-text">
            <h1>Pizza Taste</h1>
            <h2>The tasty pizza of <br> your choice</h2>
            <a href="file:///C:/Users/LENOVO/Desktop/script.html">View Menu</a>
        </div>
        <div class="home-img">
            <img src= "C:\Users\LENOVO\Desktop\pizza.jpg" alt="pizzi">
        </div>
    </section>

    <!-- About -->
    <section class="about" id="about">
        <div class="about-img">
            <img src=C:\Users\LENOVO\Desktop\pizzi2.jpg alt="">
        </div>
        <div class="about-text">
            <span>About Us</span>
            <h2>We make good and <br> tasty pizzas</h2>
            <p>Whether you're hosting a party or indulging in a solo feast, we ensure quick delivery straight to your doorstep.</p>
            <a href="file:///C:/Users/LENOVO/Desktop/index.html">Learn More</a>
        </div>
    </section>

    <!-- Menu -->
    <section class="menu" id="menu">

        <div class="heading">
            <span>Menu</span>
            <h2>Tasty menu of the week</h2>
        </div>
        <div class="menu-container">
            <!-- Box 1 -->
            <div class="box">
                <div class="box-img">
                    <img src="https://images.pexels.com/photos/803290/pexels-photo-803290.jpeg?cs=srgb&dl=pexels-beqa-tefnadze-803290.jpg&fm=jpg" alt="">
                </div>
                <h2>Cheese Pizza</h2>
                <h3>Tasty Food</h3>
                <span>$30.05</span>
                <i class='bx bx-cart-alt'></i>
            </div>
            <!-- Box 2 -->
            <div class="box">
                <div class="box-img">
                    <img src="https://img.freepik.com/free-photo/pepperoni-pizza-with-sausages-cheese-dark-wooden-table_220768-9277.jpg?size=626&ext=jpg" alt="">
                </div>
                <h2>Tropical Pizza</h2>
                <h3>Tasty Food</h3>
                <span>$42.05</span>
                <i class='bx bx-cart-alt'></i>
            </div>
            <!-- Box 3 -->
            <div class="box">
                <div class="box-img">
                    <img src="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=740&t=st=1661842808~exp=1661843408~hmac=c40f0c154036b96b1dba17947c4e4f7c07f40db983106490402bb0b7b6ec452e" alt="">
                </div>
                <h2>Mecaroni Pizza</h2>
                <h3>Tasty Food</h3>
                <span>$12.05</span>
                <i class='bx bx-cart-alt'></i>
            </div>
        </div>
    </section>

    <!-- Service -->
    <section class="services" id="services">
        <div class="heading">
            <span>Services</span>
            <h2>We provide best food services</h2>
        </div>

        <div class="servives-container">
            <!-- Box 1 -->
            <div class="s-box">
                <img src="https://images.pexels.com/photos/280453/pexels-photo-280453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500.png" alt="">
                <h3>You Order</h3>
                <p>Order Your Favorite Pizza 🍕
Craving delicious, hot, and cheesy pizza? You’re just a few clicks away from satisfying your taste buds!

.</p>
            </div>
            <!-- Box 2 -->
            <div class="s-box">
                <img src="https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500.png" alt="">
                <h3>Shipping</h3>
                <p>Fast Delivery: Piping hot pizza delivered right to your doorstep!
Satisfaction Guaranteed: We promise you'll love every bite..</p>
            </div>
            <!-- Box 3 -->
            <div class="s-box">
                <img src="https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500.png" alt="">
                <h3>Delivered</h3>
                <p>Special Offers on Delivery
Free Delivery: On orders above $20.
Combo Deals: Add sides and drinks to your order and save big!
Loyalty Rewards: Earn points every time you order and redeem them for discounts.
</p>
            </div>
        </div>
    </section>

    <!-- Connect -->
    <section class="connect">
        <div class="connect-text">
            <span>Let's Talk</span>
            <h2>Connect now</h2>
        </div>
        <a href="file:///C:/Users/LENOVO/Desktop/contact.html">Contact Us</a>
    </section>

    <!-- Contact -->
    <section class="contact" id="contact">
        <div class="contact-box">
            <h3>Pizza Pie</h3>
            <span>Connect With Us</span>
            <div class="social">
                <a href="#"><i class='bx bxl-facebook' ></i></a>
                <a href="#"><i class='bx bxl-twitter' ></i></a>
                <a href="#"><i class='bx bxl-instagram' ></i></a>
            </div>
        </div>
        <div class="contact-box">
            <h3>Menu Links</h3>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#services">Service</a></li>
            <li><a href="#contact">Contact</a></li>
        </div>
        <div class="contact-box">
            <h3>Quick Links</h3>
            <li><a href="#Contact">Contact</a></li>
            <li><a href="#Privacy Policy">Privacy Policy</a></li>
            <li><a href="#Disclaimer">Disclaimer</a></li>
            <li><a href="#Terms Of Use">Terms Of Use</a></li>
        </div>
        <div class="contact-box address">
            <h3>Contact</h3>
            <i class='bx bxs-map' ><span>005,Dayananda Sagar University,Harohalli,Karnataka,562112,India</span></i>
<a href="https://www.dsu.edu.in/">Dayananda Sagar university</a>
            <i class='bx bxs-phone' ><span>+91 698 9345 783</span></i>
            <i class='bx bxs-envelope' ><span>pizzeriaatmyuni@email.com</span></i>
        </div>
    </section>

    <!-- Copyright -->
    <div class="copyright">
        <p>© Asslone4 All Right Reserved.</p>
    </div>


    <!-- Scroll Reveal -->
    <script src="https://unpkg.com/scrollreveal"></script>
    <!-- Link To JavaScript -->
    <script src="code.js"></script>
</body>
</html>
