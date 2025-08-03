// Automatically include header and footer
function includeHTML(id, url) {
  fetch(url)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
      if (id === 'header-include') setupHeaderMenu();
    });
}

function setupHeaderMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
    });
  }
}

// Countdown timer for special offer
function startOfferCountdown(targetDate) {
  function updateTimer() {
    const now = new Date();
    let diff = Math.max(0, targetDate - now);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);
    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);
    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);
    const seconds = Math.floor(diff / 1000);
    document.getElementById('timer-days').textContent = days.toString().padStart(2, '0');
    document.getElementById('timer-hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('timer-minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('timer-seconds').textContent = seconds.toString().padStart(2, '0');
  }
  updateTimer();
  setInterval(updateTimer, 1000);
}

// --- PRODUCT PAGINATION ---
const productData = [
  { name: 'Silver Ring with Gemstone', price: 1200000, oldPrice: 1500000, material: 'Silver 925', style: 'Gemstone Ring', createdAt: '2024-06-01', image: './assets/images/1.png' },
  { name: 'Silver Charm Bracelet', price: 850000, material: 'Silver 925', style: 'Simple Ring', createdAt: '2024-05-30', image: './assets/images/2.png' },
  { name: 'Moon Necklace', price: 960000, oldPrice: 1200000, material: 'Silver 925', style: 'Vintage Ring', createdAt: '2024-05-15', image: './assets/images/3.jpg' },
  { name: 'Pearl Earrings', price: 1350000, material: 'Titanium', style: 'Wedding Ring', createdAt: '2024-05-10', image: './assets/images/4.jpg' },
  { name: 'Gemstone Bracelet', price: 2100000, material: 'Gold 18k', style: 'Gemstone Ring', createdAt: '2024-05-05', image: './assets/images/5.jpg' },
  { name: 'Gold Ring 18K', price: 4500000, oldPrice: 5000000, material: 'Gold 18k', style: 'Wedding Ring', createdAt: '2024-04-30', image: './assets/images/6.jpg' },
  { name: 'Gemstone Earrings', price: 1800000, material: 'Silver 925', style: 'Gemstone Ring', createdAt: '2024-04-25', image: './assets/images/7.jpg' },
  { name: 'Italian Gold Necklace', price: 3200000, material: 'Gold 14k', style: 'Vintage Ring', createdAt: '2024-04-20', image: './assets/images/8.jpg' },
  { name: 'Silver Anklet', price: 650000, material: 'Silver 925', style: 'Simple Ring', createdAt: '2024-04-15', image: './assets/images/9.jpg' },
  { name: 'Love Couple Ring', price: 2800000, material: 'Gold 14k', style: 'Wedding Ring', createdAt: '2024-04-10', image: './assets/images/10.jpg' },
  { name: 'Pearl Necklace', price: 5000000, material: 'Titanium', style: 'Gemstone Ring', createdAt: '2024-04-05', image: './assets/images/11.jpg' },
  { name: 'Titanium Earrings', price: 500000, material: 'Titanium', style: 'Simple Ring', createdAt: '2024-04-01', image: './assets/images/12.jpg' },
  { name: 'Blue Gemstone Ring', price: 1700000, material: 'Silver 925', style: 'Gemstone Ring', createdAt: '2024-03-28', image: './assets/images/13.jpg' },
  { name: 'Rose Gold Bracelet', price: 2500000, material: 'Gold 18k', style: 'Vintage Ring', createdAt: '2024-03-25', image: './assets/images/14.jpg' },
  { name: 'Heart Necklace', price: 1200000, material: 'Silver 925', style: 'Simple Ring', createdAt: '2024-03-20', image: './assets/images/15.jpg' },
  { name: 'Italian Silver Earrings', price: 900000, material: 'Silver 925', style: 'Vintage Ring', createdAt: '2024-03-15', image: './assets/images/16.jpg' },
  { name: 'Jade Bracelet', price: 3200000, material: 'Gold 18k', style: 'Gemstone Ring', createdAt: '2024-03-10', image: './assets/images/17.jpg' },
  { name: 'Couple Wedding Ring', price: 4800000, material: 'Gold 18k', style: 'Wedding Ring', createdAt: '2024-03-05', image: './assets/images/18.jpg' },
  { name: 'Emerald Earrings', price: 2200000, material: 'Silver 925', style: 'Gemstone Ring', createdAt: '2024-03-01', image: './assets/images/19.jpg' },
  { name: 'Ruby Necklace', price: 4100000, material: 'Gold 14k', style: 'Vintage Ring', createdAt: '2024-02-25', image: './assets/images/20.jpg' },
  { name: 'Gold Anklet 14K', price: 1500000, material: 'Gold 14k', style: 'Simple Ring', createdAt: '2024-02-20', image: './assets/images/21.jpg' },
  { name: 'Vintage Ring', price: 950000, material: 'Silver 925', style: 'Vintage Ring', createdAt: '2024-02-15', image: './assets/images/22.avif' },
  { name: 'Sapphire Necklace', price: 3700000, material: 'Gold 14k', style: 'Gemstone Ring', createdAt: '2024-02-10', image: './assets/images/23.jpg' },
  { name: 'Topaz Earrings', price: 800000, material: 'Silver 925', style: 'Simple Ring', createdAt: '2024-02-05', image: './assets/images/24.png' }
];

  // Optimized product image function
  function createProductImage(imageSrc, altText) {
    return `<img src="${imageSrc}" alt="${altText}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
              <div class="img-placeholder" style="display: none;">Image</div>`;
  }

const PRODUCTS_PER_PAGE = 6;
function formatPrice(n) {
  return n.toLocaleString('vi-VN') + '₫';
}
function renderProducts(page) {
  const start = (page - 1) * PRODUCTS_PER_PAGE;
  const end = start + PRODUCTS_PER_PAGE;
  const products = productData.slice(start, end);
  const list = document.getElementById('product-list');
  list.innerHTML = products.map((p, index) => `
    <div class="product-card" data-product-index="${start + index}">
      <div class="product-img">${createProductImage(p.image, p.name)}</div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-price">${formatPrice(p.price)}${p.oldPrice ? ` <span class='product-old-price'>${formatPrice(p.oldPrice)}</span>` : ''}</div>
        <div class="product-actions">
          <button class="add-to-cart">Add to Cart</button>
          <button class="favorite-btn">♡</button>
        </div>
      </div>
    </div>
  `).join('');
  
  // Thêm sự kiện click vào sản phẩm để chuyển đến trang chi tiết
  list.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', function(e) {
      // Don't navigate if clicking on buttons
      if (e.target.classList.contains('add-to-cart') || e.target.classList.contains('favorite-btn')) {
        return;
      }
      
      const productIndex = parseInt(this.getAttribute('data-product-index'));
      const product = productData[productIndex];
      
      // Save product info to localStorage for detail page to read
      localStorage.setItem('selectedProduct', JSON.stringify({
        index: productIndex,
        ...product
      }));
      
      // Navigate to product detail page
      window.location.href = 'product-detail.html';
    });
  });
}
function renderPagination(currentPage) {
  const totalPages = Math.ceil(productData.length / PRODUCTS_PER_PAGE);
  const pag = document.getElementById('pagination');
  let html = '';
  html += `<button class="pagination-btn" ${currentPage === 1 ? 'disabled' : ''} data-page="${currentPage - 1}">&lt;</button>`;
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || Math.abs(i - currentPage) <= 1 || (totalPages <= 5)) {
      html += `<button class="pagination-btn${i === currentPage ? ' active' : ''}" data-page="${i}">${i}</button>`;
    } else if (i === 2 && currentPage > 3) {
      html += '<span class="pagination-ellipsis">...</span>';
    } else if (i === totalPages - 1 && currentPage < totalPages - 2) {
      html += '<span class="pagination-ellipsis">...</span>';
    }
  }
  html += `<button class="pagination-btn" ${currentPage === totalPages ? 'disabled' : ''} data-page="${currentPage + 1}">&gt;</button>`;
  pag.innerHTML = html;
  // Assign events
  pag.querySelectorAll('.pagination-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      const page = Number(btn.getAttribute('data-page'));
      if (!isNaN(page) && page >= 1 && page <= totalPages) {
        renderProducts(page);
        renderPagination(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });
}

// --- FILTER & SORT PRODUCTS ---
let currentFilters = { price: [], material: [], style: [] };
let currentSort = 'newest';
function getFilteredSortedProducts() {
  let filtered = productData.filter(p => {
    // Lọc theo giá
    let priceOk = true;
    if (currentFilters.price.length) {
      priceOk = currentFilters.price.some(range => {
        if (range === 'under500') return p.price < 500000;
        if (range === '500-1m') return p.price >= 500000 && p.price < 1000000;
        if (range === '1m-2m') return p.price >= 1000000 && p.price < 2000000;
        if (range === 'over2m') return p.price >= 2000000;
      });
    }
    // Lọc theo chất liệu
    let materialOk = !currentFilters.material.length || currentFilters.material.includes(p.material);
    // Lọc theo kiểu dáng
    let styleOk = !currentFilters.style.length || currentFilters.style.includes(p.style);
    return priceOk && materialOk && styleOk;
  });
  // Sắp xếp
  if (currentSort === 'price-asc') filtered.sort((a,b) => a.price - b.price);
  else if (currentSort === 'price-desc') filtered.sort((a,b) => b.price - a.price);
  else if (currentSort === 'newest') filtered.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));
  return filtered;
}
function renderProductsWithFilter(page) {
  const products = getFilteredSortedProducts();
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  page = Math.max(1, Math.min(page, totalPages || 1));
  const start = (page - 1) * PRODUCTS_PER_PAGE;
  const end = start + PRODUCTS_PER_PAGE;
  const list = document.getElementById('product-list');
  const productsToRender = products.slice(start, end);
  
  list.innerHTML = productsToRender.map((p, index) => `
    <div class="product-card" data-product-index="${start + index}">
      <div class="product-img">${createProductImage(p.image, p.name)}</div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-material">Chất liệu: ${p.material}</div>
        <div class="product-price">${formatPrice(p.price)}${p.oldPrice ? ` <span class='product-old-price'>${formatPrice(p.oldPrice)}</span>` : ''}</div>
        <div class="product-actions">
          <button class="add-to-cart">Thêm vào giỏ</button>
          <button class="favorite-btn">♡</button>
        </div>
      </div>
    </div>
  `).join('') || '<div style="text-align:center;color:#888;">Không có sản phẩm phù hợp</div>';
  
  // Thêm sự kiện click vào sản phẩm để chuyển đến trang chi tiết
  list.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', function(e) {
      // Không chuyển trang nếu click vào nút
      if (e.target.classList.contains('add-to-cart') || e.target.classList.contains('favorite-btn')) {
        return;
      }
      
      const productIndex = parseInt(this.getAttribute('data-product-index'));
      const product = products[productIndex];
      
      // Lưu thông tin sản phẩm vào localStorage để trang chi tiết có thể đọc
      localStorage.setItem('selectedProduct', JSON.stringify({
        index: productIndex,
        ...product
      }));
      
      // Chuyển đến trang chi tiết sản phẩm
      window.location.href = 'product-detail.html';
    });
  });
  
  setupAddToCartButtons();
  renderPaginationWithFilter(page, products.length);
}
function renderPaginationWithFilter(currentPage, totalProducts) {
  const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);
  const pag = document.getElementById('pagination');
  let html = '';
  html += `<button class="pagination-btn" ${currentPage === 1 ? 'disabled' : ''} data-page="${currentPage - 1}">&lt;</button>`;
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || Math.abs(i - currentPage) <= 1 || (totalPages <= 5)) {
      html += `<button class="pagination-btn${i === currentPage ? ' active' : ''}" data-page="${i}">${i}</button>`;
    } else if (i === 2 && currentPage > 3) {
      html += '<span class="pagination-ellipsis">...</span>';
    } else if (i === totalPages - 1 && currentPage < totalPages - 2) {
      html += '<span class="pagination-ellipsis">...</span>';
    }
  }
  html += `<button class="pagination-btn" ${currentPage === totalPages ? 'disabled' : ''} data-page="${currentPage + 1}">&gt;</button>`;
  pag.innerHTML = html;
  pag.querySelectorAll('.pagination-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      const page = Number(btn.getAttribute('data-page'));
      if (!isNaN(page) && page >= 1 && page <= totalPages) {
        renderProductsWithFilter(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });
}
function setupProductFilters() {
  // Price
  document.querySelectorAll('.filters-sidebar input[type="checkbox"]').forEach(cb => {
    cb.onchange = function() {
              // Determine filter type
        const label = cb.closest('div.filter-group')?.querySelector('h4')?.textContent?.trim();
        if (label === 'Price Range') {
        const val = cb.parentElement.textContent.trim();
        if (cb.checked) {
          if (val.includes('Under 500k')) currentFilters.price.push('under500');
          if (val.includes('500k - 1M')) currentFilters.price.push('500-1m');
          if (val.includes('1M - 2M')) currentFilters.price.push('1m-2m');
          if (val.includes('Above 2M')) currentFilters.price.push('over2m');
        } else {
          currentFilters.price = currentFilters.price.filter(v => {
            if (val.includes('Under 500k')) return v !== 'under500';
            if (val.includes('500k - 1M')) return v !== '500-1m';
            if (val.includes('1M - 2M')) return v !== '1m-2m';
            if (val.includes('Above 2M')) return v !== 'over2m';
            return true;
          });
        }
      }
      if (label === 'Material') {
        const val = cb.parentElement.textContent.trim();
        if (cb.checked) currentFilters.material.push(val);
        else currentFilters.material = currentFilters.material.filter(v => v !== val);
      }
      if (label === 'Style') {
        const val = cb.parentElement.textContent.trim();
        if (cb.checked) currentFilters.style.push(val);
        else currentFilters.style = currentFilters.style.filter(v => v !== val);
      }
      renderProductsWithFilter(1);
    };
  });
  // Xóa tất cả
  const clearBtn = document.querySelector('.clear-filters');
  if (clearBtn) clearBtn.onclick = function() {
    currentFilters = { price: [], material: [], style: [] };
    document.querySelectorAll('.filters-sidebar input[type="checkbox"]').forEach(cb => cb.checked = false);
    renderProductsWithFilter(1);
  };
  // Sắp xếp
  const sortSelect = document.getElementById('sort-by');
  if (sortSelect) sortSelect.onchange = function() {
    currentSort = sortSelect.value;
    renderProductsWithFilter(1);
  };
}
// Nếu ở trang sản phẩm thì setup filter/sort
if (window.location.pathname.includes('products.html') || window.location.pathname.endsWith('/products')) {
  document.addEventListener('DOMContentLoaded', function() {
    console.log('Products page loaded, checking for search query...');
    setupProductFilters();
    
    // Check if there's a search query
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');
    
    console.log('Search query from URL:', searchQuery);
    
    if (searchQuery) {
      // Display search results
      const searchResults = JSON.parse(localStorage.getItem('searchResults') || '{}');
      console.log('Search results from localStorage:', searchResults);
      
      if (searchResults.query === searchQuery && searchResults.products) {
        console.log('Rendering search results for query:', searchQuery);
        // Update page title to show search results
        const pageTitle = document.querySelector('.page-title h1');
        if (pageTitle) {
          pageTitle.textContent = `Kết quả tìm kiếm: "${searchQuery}" (${searchResults.products.length} sản phẩm)`;
        }
        
        // Render search results
        renderSearchResults(searchResults.products, 1);
      } else {
        console.log('No valid search results found, rendering normal products');
        renderProductsWithFilter(1);
      }
    } else {
      console.log('No search query, rendering normal products');
      renderProductsWithFilter(1);
    }
  });
} else {
  // For non-products pages, initialize products if product-list exists
  document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('product-list')) {
      console.log('Product list found on non-products page, initializing...');
      renderProducts(1);
      renderPagination(1);
    }
  });
}

// Function to render search results
function renderSearchResults(products, page) {
  console.log('renderSearchResults called with:', products.length, 'products, page:', page);
  
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  page = Math.max(1, Math.min(page, totalPages || 1));
  const start = (page - 1) * PRODUCTS_PER_PAGE;
  const end = start + PRODUCTS_PER_PAGE;
  const list = document.getElementById('product-list');
  
  console.log('Product list element found:', !!list);
  console.log('Rendering products from index', start, 'to', end);
  
  const productsToRender = products.slice(start, end);
  console.log('Products to render:', productsToRender.map(p => p.name));
  
  list.innerHTML = productsToRender.map((p, index) => `
    <div class="product-card" data-product-index="${start + index}">
      <div class="product-img">${createProductImage(p.image, p.name)}</div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-material">Chất liệu: ${p.material}</div>
        <div class="product-price">${formatPrice(p.price)}${p.oldPrice ? ` <span class='product-old-price'>${formatPrice(p.oldPrice)}</span>` : ''}</div>
        <div class="product-actions">
          <button class="add-to-cart">Thêm vào giỏ</button>
          <button class="favorite-btn">♡</button>
        </div>
      </div>
    </div>
  `).join('') || '<div style="text-align:center;color:#888;">Không có sản phẩm phù hợp</div>';
  
  // Add click events for product cards
  list.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', function(e) {
      if (e.target.classList.contains('add-to-cart') || e.target.classList.contains('favorite-btn')) {
        return;
      }
      
      const productIndex = parseInt(this.getAttribute('data-product-index'));
      const product = products[productIndex];
      
      localStorage.setItem('selectedProduct', JSON.stringify({
        index: productIndex,
        ...product
      }));
      
      window.location.href = 'product-detail.html';
    });
  });
  
  setupAddToCartButtons();
  renderPaginationWithFilter(page, products.length);
}

// --- AUTH: Register ---
if (document.querySelector('.auth-form') && window.location.pathname.includes('register')) {
  document.querySelector('.auth-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.querySelector('input[type="text"]').value.trim();
    const email = this.querySelector('input[type="email"]').value.trim();
    const pass = this.querySelectorAll('input[type="password"]')[0].value;
    const pass2 = this.querySelectorAll('input[type="password"]')[1].value;
    if (pass !== pass2) {
      alert('Password confirmation does not match!');
      return;
    }
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find(u => u.email === email)) {
      alert('Email already exists!');
      return;
    }
    users.push({ name, email, pass });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful! You can now login.');
    window.location.href = 'login.html';
  });
}
// --- AUTH: Login ---
if (document.querySelector('.auth-form') && window.location.pathname.includes('login')) {
  document.querySelector('.auth-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value.trim();
    const pass = this.querySelector('input[type="password"]').value;
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.pass === pass);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      alert('Login successful!');
      window.location.href = 'index.html';
    } else {
      alert('Email or password is incorrect!');
    }
  });
}

// --- CART: Add products to cart, update quantity on icon ---
function getCart() {
  return JSON.parse(localStorage.getItem('cart') || '[]');
}
function setCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Helper function to add product to cart
function addToCart(product) {
  let cart = getCart();
  let found = cart.find(item => item.name === product.name);
  if (found) {
    found.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  setCart(cart);
  updateCartCount();
  return true;
}
function updateCartCount() {
  setTimeout(function() {
    let cart = getCart();
    let count = cart.reduce((sum, item) => sum + item.quantity, 0);
    let icon = document.querySelector('.cart-icon');
    if (icon) {
      let badge = icon.querySelector('.cart-count');
      if (!badge) {
        badge = document.createElement('span');
        badge.className = 'cart-count';
        icon.appendChild(badge);
      }
      badge.textContent = count > 0 ? count : '';
    }
  }, 300);
}
// Gán sự kiện cho nút Thêm vào giỏ trên trang sản phẩm
function setupAddToCartButtons() {
  document.querySelectorAll('.add-to-cart').forEach((btn, idx) => {
    btn.onclick = function() {
      let product = null;
      
      // Nếu ở trang products, lấy từ productData
      if (window.location.pathname.includes('products')) {
        let page = 1;
        const url = new URL(window.location.href);
        const p = url.searchParams.get('page');
        if (p) page = parseInt(p);
        const start = (page - 1) * PRODUCTS_PER_PAGE;
        product = productData[start + idx];
      } else {
        // Nếu ở trang khác (như index.html), lấy thông tin từ DOM
        const productCard = btn.closest('.product-card');
        if (productCard) {
          const productName = productCard.querySelector('.product-name')?.textContent;
          const productPrice = productCard.querySelector('.product-price')?.textContent;
          const productImg = productCard.querySelector('.product-img img')?.src;
          
          if (productName) {
            // Tìm sản phẩm trong productData theo tên
            product = productData.find(p => p.name === productName);
            if (!product && productName && productPrice) {
              // Nếu không tìm thấy, tạo object tạm thời
              const price = parseInt(productPrice.replace(/[^\d]/g, ''));
              product = {
                name: productName,
                price: price,
                image: productImg || './assets/images/1.png'
              };
            }
          }
        }
      }
      
      if (!product) {
        alert('Không thể thêm sản phẩm vào giỏ hàng!');
        return;
      }
      
      addToCart(product);
      alert('Đã thêm vào giỏ hàng!');
    };
  });
}
// Gọi sau khi render sản phẩm
const oldRenderProducts = renderProducts;
renderProducts = function(page) {
  oldRenderProducts(page);
  setupAddToCartButtons();
};

// --- CART: Hiển thị và thao tác trên trang giỏ hàng ---
function renderCartPage() {
  const cartTable = document.querySelector('.cart-table tbody');
  const cartSummary = document.querySelector('.cart-summary .summary-totals');
  if (!cartTable || !cartSummary) return;
  let cart = getCart();
  // Render sản phẩm
  cartTable.innerHTML = cart.length ? cart.map((item, idx) => `
    <tr>
      <td class="cart-prod">
        <div class="cart-img">${createProductImage(item.image, item.name)}</div>
        <div class="cart-info"><div class="cart-name">${item.name}</div></div>
      </td>
      <td>${item.variant || ''}</td>
      <td>${formatPrice(item.price)}</td>
      <td>
        <div class="cart-qty">
          <button class="qty-minus" data-idx="${idx}">-</button>
          <input type="number" value="${item.quantity}" min="1" data-idx="${idx}">
          <button class="qty-plus" data-idx="${idx}">+</button>
        </div>
      </td>
      <td>${formatPrice(item.price * item.quantity)}</td>
      <td><button class="cart-remove" data-idx="${idx}">✕</button></td>
    </tr>
  `).join('') : '<tr><td colspan="6" style="text-align:center;color:#888;">Empty Cart</td></tr>';
  // Tính tổng
  let tamtinh = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  let giamgia = cart.length ? 300000 : 0;
  let phiship = 0;
  let tong = tamtinh - giamgia + phiship;
  cartSummary.innerHTML = `
    <div class="summary-row"><span>Subtotal</span><span>${formatPrice(tamtinh)}</span></div>
    <div class="summary-row"><span>Discount</span><span>-${formatPrice(giamgia)}</span></div>
    <div class="summary-row"><span>Shipping</span><span>${phiship === 0 ? 'Free' : formatPrice(phiship)}</span></div>
    <div class="summary-row summary-total"><span>Total</span><span>${formatPrice(tong)}</span></div>
  `;
  updateCartCount();
  // Sự kiện tăng/giảm/xóa
  cartTable.querySelectorAll('.qty-minus').forEach(btn => {
    btn.onclick = function() {
      let idx = +btn.dataset.idx;
      if (cart[idx].quantity > 1) { cart[idx].quantity--; setCart(cart); renderCartPage(); }
    };
  });
  cartTable.querySelectorAll('.qty-plus').forEach(btn => {
    btn.onclick = function() {
      let idx = +btn.dataset.idx;
      cart[idx].quantity++; setCart(cart); renderCartPage();
    };
  });
  cartTable.querySelectorAll('input[type="number"]').forEach(input => {
    input.onchange = function() {
      let idx = +input.dataset.idx;
      let val = Math.max(1, parseInt(input.value) || 1);
      cart[idx].quantity = val; setCart(cart); renderCartPage();
    };
  });
  cartTable.querySelectorAll('.cart-remove').forEach(btn => {
    btn.onclick = function() {
      let idx = +btn.dataset.idx;
      cart.splice(idx, 1); setCart(cart); renderCartPage();
    };
  });
  // Xóa tất cả
  const clearBtn = document.querySelector('.cart-clear');
  if (clearBtn) clearBtn.onclick = function() { setCart([]); renderCartPage(); };
}
// Tự động render cart nếu ở trang cart.html
if (window.location.pathname.includes('cart')) {
  document.addEventListener('DOMContentLoaded', renderCartPage);
}

// --- CHECKOUT: Hiển thị sản phẩm và tổng tiền thực tế ---
function renderCheckoutSummary() {
  const prodBox = document.getElementById('checkout-products');
  const totalsBox = document.getElementById('checkout-totals');
  if (!prodBox || !totalsBox) return;
  let cart = getCart();
  if (!cart.length) {
    window.location.href = 'cart.html';
    return;
  }
  prodBox.innerHTML = cart.map(item => `
    <div class="summary-product">
      <div class="summary-img">${createProductImage(item.image, item.name)}</div>
      <div class="summary-info">
        <div class="summary-name">${item.name}</div>
        <div class="summary-variant">${item.variant || ''}</div>
        <div class="summary-price">${formatPrice(item.price)} x ${item.quantity}</div>
      </div>
    </div>
  `).join('');
  let tamtinh = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  let giamgia = cart.length ? 300000 : 0;
  let phiship = 0;
  let tong = tamtinh - giamgia + phiship;
  totalsBox.innerHTML = `
    <div class="summary-row"><span>Subtotal</span><span>${formatPrice(tamtinh)}</span></div>
    <div class="summary-row"><span>Discount</span><span>-${formatPrice(giamgia)}</span></div>
    <div class="summary-row"><span>Shipping</span><span>${phiship === 0 ? 'Free' : formatPrice(phiship)}</span></div>
    <div class="summary-row summary-total"><span>Total</span><span>${formatPrice(tong)}</span></div>
  `;
}
// --- CHECKOUT: Đặt hàng, popup xác nhận, popup QR, lưu đơn hàng ---
function saveOrder(order) {
  let orders = JSON.parse(localStorage.getItem('orders') || '[]');
  orders.push(order);
  localStorage.setItem('orders', JSON.stringify(orders));
}
function showOrderSuccessPopup() {
  const popup = document.getElementById('order-popup');
  popup.innerHTML = `<div class='order-popup-content'>
    <h2>Order Successful!</h2>
    <p>Thank you for your order at ARATA JEWELRY.<br>You can view your order in your account.</p>
    <button onclick="window.location.href='account.html'">View Order</button>
    <button onclick="document.getElementById('order-popup').style.display='none'">Close</button>
  </div>`;
  popup.style.display = 'flex';
}
function showQrPopup(onConfirm) {
  const popup = document.getElementById('qr-popup');
  popup.innerHTML = `<div class='qr-popup-content'>
    <button class='close-qr' onclick="document.getElementById('qr-popup').style.display='none'">×</button>
    <h2>Quét mã QR để thanh toán</h2>
    <img src='https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=aratajewelry.vn' alt='QR code'>
    <div class='qr-note'>Vui lòng chuyển khoản đúng số tiền và nội dung.</div>
    <button id='qr-confirm-btn'>Đã chuyển khoản</button>
  </div>`;
  popup.style.display = 'flex';
  setTimeout(() => {
    document.getElementById('qr-confirm-btn').onclick = function() {
      popup.style.display = 'none';
      onConfirm();
    };
  }, 100);
}
function getCheckoutOrderInfo() {
  // Lấy thông tin từ form checkout
  const form = document.querySelector('.checkout-form');
  if (!form) return null;
  const inputs = form.querySelectorAll('input, textarea');
  let info = {};
  inputs.forEach(inp => {
    if (inp.type === 'radio' && !inp.checked) return;
    info[inp.placeholder || inp.name || inp.type] = inp.value;
  });
  // Lấy sản phẩm từ giỏ hàng
  info.products = getCart();
  // Tổng tiền
  info.total = info.products.reduce((sum, item) => sum + item.price * item.quantity, 0) - (info.products.length ? 300000 : 0);
  info.time = new Date().toLocaleString('vi-VN');
  return info;
}
// --- CHECKOUT: Tự động điền thông tin người nhận nếu đã đăng nhập ---
if (window.location.pathname.includes('checkout')) {
  document.addEventListener('DOMContentLoaded', function() {
    renderCheckoutSummary();
    // Tự động điền thông tin nếu đã đăng nhập
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (user) {
      const form = document.querySelector('.checkout-form');
      if (form) {
        const inputs = form.querySelectorAll('input');
        // Giả định input đầu là họ tên, thứ hai là SĐT, thứ ba là email
        if (inputs[0]) inputs[0].value = user.name || '';
        if (inputs[1]) inputs[1].value = user.phone || '';
        if (inputs[2] && inputs[2].type === 'email') inputs[2].value = user.email || '';
      }
    }
    // Đặt hàng
    const btn = document.querySelector('.checkout-btn');
    if (btn) btn.onclick = function(e) {
      e.preventDefault();
      // Xác định phương thức thanh toán
      const payMethod = document.querySelector('.payment-methods input[type="radio"]:checked');
      const payText = payMethod ? payMethod.parentElement.textContent.trim() : '';
      const order = getCheckoutOrderInfo();
      if (!order || !order.products.length) return;
      if (payText.includes('COD')) {
        saveOrder(order);
        setCart([]);
        showOrderSuccessPopup();
      } else if (payText.includes('Chuyển khoản') || payText.includes('Ví điện tử') || payText.includes('thẻ')) {
        showQrPopup(() => {
          saveOrder(order);
          setCart([]);
          showOrderSuccessPopup();
        });
      }
    };
  });
}

// Search functionality
function setupSearch() {
  const searchForm = document.querySelector('.search-form');
  const searchInput = document.getElementById('search-input');
  
  console.log('Setting up search...');
  console.log('Search form found:', !!searchForm);
  console.log('Search input found:', !!searchInput);
  
  if (searchForm && searchInput) {
    console.log('Search elements found, adding event listeners...');
    
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const query = searchInput.value.trim().toLowerCase();
      
      console.log('Search submitted with query:', query);
      
      if (query.length === 0) {
        alert('Vui lòng nhập từ khóa tìm kiếm!');
        return;
      }
      
      // Filter products based on search query
      const filteredProducts = productData.filter(product => {
        const nameMatch = product.name.toLowerCase().includes(query);
        const materialMatch = product.material.toLowerCase().includes(query);
        const styleMatch = product.style.toLowerCase().includes(query);
        
        console.log(`Product: ${product.name}, nameMatch: ${nameMatch}, materialMatch: ${materialMatch}, styleMatch: ${styleMatch}`);
        
        return nameMatch || materialMatch || styleMatch;
      });
      
      console.log('Filtered products found:', filteredProducts.length);
      console.log('Sample filtered products:', filteredProducts.slice(0, 3).map(p => p.name));
      
      if (filteredProducts.length === 0) {
        alert('Không tìm thấy sản phẩm phù hợp với từ khóa: "' + query + '"');
        return;
      }
      
      // Save search results to localStorage
      localStorage.setItem('searchResults', JSON.stringify({
        query: query,
        products: filteredProducts
      }));
      
      console.log('Search results saved to localStorage, navigating to products page...');
      
      // Navigate to products page with search results
      window.location.href = 'products.html?search=' + encodeURIComponent(query);
    });
    
    // Add real-time search suggestions (optional)
    searchInput.addEventListener('input', function() {
      const query = this.value.trim().toLowerCase();
      if (query.length >= 2) {
        // You can add search suggestions here
        // For now, we'll just clear the input when it's too short
      }
    });
    
    console.log('Search setup completed successfully');
  } else {
    console.log('Search elements not found. Retrying in 500ms...');
    setTimeout(setupSearch, 500);
  }
}

// Page Transition System
let isTransitioning = false;

function showPageTransition() {
  if (isTransitioning) return;
  isTransitioning = true;
  
  const transition = document.getElementById('page-transition');
  if (transition) {
    transition.classList.add('active');
  }
}

function hidePageTransition() {
  const transition = document.getElementById('page-transition');
  if (transition) {
    setTimeout(() => {
      transition.classList.remove('active');
      isTransitioning = false;
    }, 500);
  }
}

// Page Load Animation
function animatePageContent() {
  const pageContent = document.querySelector('main');
  if (pageContent) {
    pageContent.classList.add('page-content');
    setTimeout(() => {
      pageContent.classList.add('loaded');
    }, 100);
  }
}

// Smooth Navigation
function setupSmoothNavigation() {
  // Intercept all internal links
  document.addEventListener('click', function(e) {
    const link = e.target.closest('a');
    if (link && link.href && link.href.includes(window.location.origin) && !link.href.includes('#')) {
      e.preventDefault();
      
      const targetUrl = link.href;
      showPageTransition();
      
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 300);
    }
  });
  
  // Handle browser back/forward
  window.addEventListener('popstate', function() {
    showPageTransition();
  });
}

// Intersection Observer for animations
function setupScrollAnimations() {
  // Simplified scroll animations for better performance
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Only observe essential elements
  const animatedElements = document.querySelectorAll('.contact-card, .faq-item');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.4s ease';
    observer.observe(el);
  });
}



// Initial page load transition
window.addEventListener('load', function() {
  const transition = document.getElementById('page-transition');
  if (transition) {
    setTimeout(() => {
      transition.classList.remove('active');
    }, 500);
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Create page transition element if not exists
  if (!document.getElementById('page-transition')) {
    const transition = document.createElement('div');
    transition.id = 'page-transition';
    transition.innerHTML = `
      <div class="page-transition-content">
        <div class="page-transition-logo">
          <i class="fas fa-gem"></i>
        </div>
        <div class="page-transition-text">ARATA JEWELRY</div>
        <div class="page-transition-spinner"></div>
      </div>
    `;
    document.body.appendChild(transition);
    transition.classList.add('active');
  }
  
  includeHTML('header-include', 'components/header.html');
  includeHTML('footer-include', 'components/footer.html');
  // Chỉ chạy countdown nếu có offer-timer
  if (document.getElementById('offer-timer')) {
    const now = new Date();
    const offerEnd = new Date(now.getTime() + 2*24*60*60*1000 + 18*60*60*1000 + 45*60*1000 + 30*1000);
    startOfferCountdown(offerEnd);
    
            // Add click event for offer button
        const offerBtn = document.querySelector('.offer-btn');
        if (offerBtn) {
          offerBtn.addEventListener('click', function() {
            // Get the specific product on offer (product 6 - Nhẫn Vàng 18K with discount)
            const offerProduct = productData[5]; // Index 5 corresponds to product 6
            
            // Add product to cart automatically
            addToCart(offerProduct);
            
            // Save the product data to localStorage for the detail page
            localStorage.setItem('selectedProduct', JSON.stringify({
              index: 5,
              ...offerProduct
            }));
            
            // Show success message
            alert('Đã thêm sản phẩm vào giỏ hàng và chuyển đến trang chi tiết!');
            
            // Navigate to the product detail page
            window.location.href = 'product-detail.html';
          });
        }
  }
  // Products page initialization
  if (document.getElementById('product-list')) {
    renderProducts(1);
    renderPagination(1);
  }
  
  // Setup add to cart buttons on all pages
  setupAddToCartButtons();
  updateCartCount();
  // Sau khi include header xong, thay đổi nút đăng nhập nếu đã đăng nhập
  setTimeout(function() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const headerRight = document.querySelector('.header-right');
    if (headerRight) {
      const loginBtn = headerRight.querySelector('.header-auth-btn.login-btn');
      if (user) {
        if (loginBtn) loginBtn.remove();
        // Thêm nút tài khoản
        if (!headerRight.querySelector('.header-account-btn')) {
          const accBtn = document.createElement('a');
          accBtn.href = 'account.html';
          accBtn.className = 'header-account-btn';
          accBtn.textContent = user.name || 'Tài khoản';
          headerRight.insertBefore(accBtn, headerRight.querySelector('.menu-toggle'));
        }
      } else {
        // Nếu chưa đăng nhập, đảm bảo có nút đăng nhập
        if (!headerRight.querySelector('.header-auth-btn.login-btn')) {
          const loginBtnNew = document.createElement('a');
          loginBtnNew.href = 'login.html';
          loginBtnNew.className = 'header-auth-btn login-btn';
          loginBtnNew.textContent = 'Đăng nhập';
          headerRight.insertBefore(loginBtnNew, headerRight.querySelector('.menu-toggle'));
        }
        // Xóa nút tài khoản nếu có
        const accBtn = headerRight.querySelector('.header-account-btn');
        if (accBtn) accBtn.remove();
      }
    }
  }, 200); // Đợi header được include xong
  
  // Initialize hero slideshow if on homepage
  if (window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/')) {
    initHeroSlideshow();
  }
  
  // Setup search functionality after header is loaded
  setTimeout(function() {
    setupSearch();
  }, 200);
  
  // Initialize animations and transitions
  setTimeout(function() {
    animatePageContent();
    setupScrollAnimations();
    setupSmoothNavigation();
    hidePageTransition();
  }, 300);
}); 

// Hero Slideshow functionality
function initHeroSlideshow() {
  const slides = document.querySelectorAll('.slide');
  
  let currentSlide = 0;
  let slideInterval;
  
  function showSlide(index) {
    // Remove active class from all slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Add active class to current slide
    slides[index].classList.add('active');
    
    currentSlide = index;
  }
  
  function nextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
  }
  
                           function startAutoSlide() {
              slideInterval = setInterval(nextSlide, 2500); // Change slide every 2.5 seconds
            }
  
  function stopAutoSlide() {
    clearInterval(slideInterval);
  }
  
  // Pause auto slide on hover
  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    heroSection.addEventListener('mouseenter', stopAutoSlide);
    heroSection.addEventListener('mouseleave', startAutoSlide);
  }
  
  // Start auto slide
  startAutoSlide();
}
