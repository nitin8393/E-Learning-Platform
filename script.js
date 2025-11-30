// --- DATA: Courses (Home Page) ---
const trendingCourses = [
    {
        title: "UI/UX Design Guide with Figma",
        author: "Mark Doe",
        price: "₹ 6000",
        img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
        badge: "Short"
    },
    {
        title: "Complete Python Bootcamp",
        author: "Angela Yu",
        price: "₹ 4500",
        img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159",
        badge: "Bestseller"
    },
    {
        title: "Web Dev: HTML, CSS, JS",
        author: "Jonas S.",
        price: "₹ 5500",
        img: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613",
        badge: "New"
    }
];

const topRatedCourses = [
    {
        title: "Machine Learning A-Z",
        author: "Kirill E.",
        price: "₹ 8000",
        img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
        badge: "Advanced"
    },
    {
        title: "React JS Masterclass",
        author: "Maximilian",
        price: "₹ 7000",
        img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
        badge: "Intermediate"
    }
];

// --- ALL COURSES DATA (Courses Tab) ---
const allCoursesData = [
    ...trendingCourses, 
    ...topRatedCourses,
    {
        title: "Digital Marketing 101",
        author: "Neil Patel",
        price: "₹ 3000",
        img: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=400&q=80",
        badge: "Popular"
    },
    {
        title: "Flutter App Development",
        author: "Google Team",
        price: "₹ 5000",
        img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80",
        badge: "New"
    }
];

// --- WISHLIST DATA ---
const wishlistData = [
    {
        title: "Adobe Illustrator Mastery",
        author: "Daniel Scott",
        price: "₹ 2500",
        img: "https://images.unsplash.com/photo-1626785774573-4b799312c95d?auto=format&fit=crop&w=400&q=80",
        badge: "Creative"
    },
    {
        title: "React Native for Mobile",
        author: "Stephen Grider",
        price: "₹ 6000",
        img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=400&q=80",
        badge: "Mobile"
    }
];

// --- MY CART DATA ---
let myCartData = [
    {
        title: "Complete Python Bootcamp",
        author: "Angela Yu",
        price: 4500,
        img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159"
    },
    {
        title: "React JS Masterclass",
        author: "Maximilian",
        price: 7000,
        img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee"
    }
];


// --- RENDER FUNCTIONS ---

// 1. Generic Render (Home, Wishlist, All Courses)
function renderCourses(data, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return; 
    container.innerHTML = ""; 

    data.forEach(course => {
        const card = `
            <div class="card">
                <div class="card-img">
                    <img src="${course.img}" alt="${course.title}">
                    <span class="badge">${course.badge}</span>
                </div>
                <h4>${course.title}</h4>
                <p class="author">By ${course.author}</p>
                <div class="price">${course.price}</div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// 2. Render My Learning
const myLearningData = [
    {
        title: "Full Stack Web Development",
        author: "Jonas S.",
        img: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613",
        progress: 75,
        totalLessons: 40,
        completedLessons: 30
    },
    {
        title: "UI/UX Design Masterclass",
        author: "Mark Doe",
        img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
        progress: 40,
        totalLessons: 20,
        completedLessons: 8
    },
    {
        title: "Python for Data Science",
        author: "Angela Yu",
        img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159",
        progress: 10,
        totalLessons: 50,
        completedLessons: 5
    }
];

function renderMyLearning() {
    const container = document.getElementById('learning-container');
    if (!container) return;
    container.innerHTML = ""; 

    myLearningData.forEach(course => {
        const card = `
            <div class="card">
                <div class="card-img">
                    <img src="${course.img}" alt="${course.title}">
                </div>
                <h4>${course.title}</h4>
                <p class="author">By ${course.author}</p>
                <div class="progress-container">
                    <div class="progress-bar" style="width: ${course.progress}%"></div>
                </div>
                <div class="progress-text">
                    <span>${course.progress}% Complete</span>
                    <span>${course.completedLessons}/${course.totalLessons} Lessons</span>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// 3. Render Wishlist
function renderWishlist() {
    renderCourses(wishlistData, 'wishlist-container');
}

// 4. Render Cart
function renderMyCart() {
    const container = document.getElementById('cart-items-container');
    const subtotalEl = document.getElementById('cart-subtotal');
    const taxEl = document.getElementById('cart-tax');
    const totalEl = document.getElementById('cart-total');
    
    if (!container) return;
    container.innerHTML = "";
    
    let subtotal = 0;

    myCartData.forEach((item, index) => {
        subtotal += item.price;
        const cartItem = `
            <div class="cart-item">
                <div style="display: flex; align-items: center;">
                    <img src="${item.img}" alt="${item.title}">
                    <div class="cart-item-info">
                        <h4>${item.title}</h4>
                        <p class="author">By ${item.author}</p>
                    </div>
                </div>
                <div class="cart-item-actions">
                    <div class="price">₹ ${item.price}</div>
                    <button class="btn-remove" onclick="removeFromCart(${index})">
                        <i class="ri-delete-bin-line"></i> Remove
                    </button>
                </div>
            </div>
        `;
        container.innerHTML += cartItem;
    });

    const tax = subtotal * 0.18;
    const total = subtotal + tax;

    if(subtotalEl) subtotalEl.innerText = `₹ ${subtotal.toFixed(2)}`;
    if(taxEl) taxEl.innerText = `₹ ${tax.toFixed(2)}`;
    if(totalEl) totalEl.innerText = `₹ ${total.toFixed(2)}`;
}

function removeFromCart(index) {
    myCartData.splice(index, 1);
    renderMyCart();
}

// --- INITIAL RENDER (HOME PAGE) ---
renderCourses(trendingCourses, 'trending-container');
renderCourses(topRatedCourses, 'top-rated-container');


// --- TESTIMONIALS SLIDER ---
const testimonials = [
    {
        name: "Hannah Schmitt",
        role: "UX Designer",
        text: "This platform helped me learn Figma in just 2 weeks! The instructors are amazing.",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
    },
    {
        name: "Rahul Verma",
        role: "Web Developer",
        text: "The web development courses are very practical. I built my first portfolio using this.",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
    }
];

let currentSlide = 0;

function showTestimonial() {
    const content = document.getElementById('testimonial-content');
    if(!content) return;
    const data = testimonials[currentSlide];
    
    content.innerHTML = `
        <img src="${data.img}" class="user-pic">
        <h3>${data.name}</h3>
        <p style="color: #ccc; font-size: 14px;">${data.role}</p>
        <p style="margin-top: 15px; font-style: italic;">"${data.text}"</p>
        <div style="margin-top: 10px; color: #ffbf00;">★★★★★</div>
    `;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % testimonials.length;
    showTestimonial();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
    showTestimonial();
}
showTestimonial(); // Load first


// --- SEARCH FILTER ---
function filterCourses() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const allCards = document.querySelectorAll('.card');

    allCards.forEach(card => {
        const title = card.querySelector('h4').innerText.toLowerCase();
        if (title.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}


// --- FINAL UPDATED SWITCH TAB FUNCTION (Handles All 6 Tabs) ---
function switchTab(tabName) {
    // 1. Get All Sections
    const sections = {
        home: document.getElementById('home-section'),
        learning: document.getElementById('my-learning-section'),
        courses: document.getElementById('courses-section'),
        wishlist: document.getElementById('wishlist-section'),
        cart: document.getElementById('my-cart-section'),
        settings: document.getElementById('settings-section')
    };

    // 2. Get All Nav Links
    const navs = {
        home: document.getElementById('nav-home'),
        learning: document.getElementById('nav-learning'),
        courses: document.getElementById('nav-courses'),
        wishlist: document.getElementById('nav-wishlist'),
        cart: document.getElementById('nav-cart'),
        settings: document.getElementById('nav-settings')
    };

    // 3. Reset: Hide ALL sections & Remove ALL active classes
    for (const key in sections) {
        if (sections[key]) sections[key].style.display = 'none';
    }
    for (const key in navs) {
        if (navs[key]) navs[key].classList.remove('active');
    }

    // 4. Activate the Clicked Tab
    if (sections[tabName]) {
        sections[tabName].style.display = 'block';
    }
    if (navs[tabName]) {
        navs[tabName].classList.add('active');
    }

    // 5. Render Data if Needed
    if (tabName === 'learning') renderMyLearning();
    if (tabName === 'courses') renderCourses(allCoursesData, 'all-courses-container');
    if (tabName === 'wishlist') renderWishlist();
    if (tabName === 'cart') renderMyCart();
    // Settings tab has static form, so no render function needed
}


// --- LOGIN PAGE LOGIC ---

// 1. Toggle Login/Signup Form
function toggleAuth(formType) {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    // Agar element nahi mila (matlab hum dashboard page par hain), to return kar do
    if (!loginForm || !signupForm) return;

    if (formType === 'signup') {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    } else {
        signupForm.style.display = 'none';
        loginForm.style.display = 'block';
    }
}

// 2. Redirect to Dashboard
function goToDashboard(event) {
    event.preventDefault(); // Form submit hone se rokega
    window.location.href = "index.html"; // Dashboard par bhej dega
}

// --- PROFILE DROPDOWN LOGIC ---

function toggleProfileMenu() {
    const menu = document.getElementById('profileMenu');
    menu.classList.toggle('active'); // CSS ki 'active' class add/remove karega
}

// Window Click Logic: Agar user profile ke bahar click kare to menu band ho jaye
window.onclick = function(event) {
    // Check karein ki click '.profile-dropdown' ke andar hua hai ya nahi
    if (!event.target.closest('.profile-dropdown')) {
        const menu = document.getElementById('profileMenu');
        if (menu && menu.classList.contains('active')) {
            menu.classList.remove('active');
        }
    }
}