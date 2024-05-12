const gallery = document.getElementById("gallery");
const previewBox = document.getElementById("preview-box");
const selectedImage = document.getElementById("selected-image");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const previewContainer = document.getElementById("preview-container");
const previewSliderContainer = document.getElementById("preview-gallery-container");

const imageUrl = [
  "images/img1.jpeg",
  "images/img2.jpeg",
  "images/img3.jpeg",
  "images/img4.jpeg",
  "images/img5.jpeg",
  "images/img6.jpeg",
  "images/img7.jpeg",
  "images/img8.jpeg",
  "images/img9.jpeg",
  "images/img10.jpeg",
  "images/img11.jpeg",
  "images/img12.jpeg",
  "images/img13.jpeg",
  "images/img14.jpeg",
  "images/img15.jpeg",
  "images/img16.jpeg",
  "images/img17.jpeg",
  "images/img18.jpeg",
  "images/img19.jpeg",
  "images/img20.jpeg",
  "images/img21.jpeg",
  "images/img22.jpeg",
  "images/img23.jpeg",
  "images/img24.jpeg",
  "images/img25.jpeg",
  "images/img26.jpeg",
  "images/img27.jpeg",
  "images/img28.jpeg",
  "images/img29.jpeg",
  "images/img30.jpeg",
];

let selectedImageIndex;

for (let i = 0; i < imageUrl.length; i++) {
  const image = document.createElement("img");
  image.classList.add("image");
  image.setAttribute("src", imageUrl[i]);
  image.onclick = () => {
    appendImageOnPreview(i);
  };
  gallery.appendChild(image);
  const previewSliderImages = document.createElement("img");
  previewSliderImages.className = "previewImage";
  previewSliderImages.setAttribute("src", imageUrl[i]);
  previewSliderImages.onclick = () => {
    appendImageOnPreview(i);
  };
  previewSliderContainer.appendChild(previewSliderImages);
}

const appendImageOnPreview = (imageIndex) => {
  previewBox.style.display = "flex";
  selectedImage.setAttribute("src", imageUrl[imageIndex]);
  selectedImageIndex = imageIndex;
  showNavButtons();
  handleSelectedImage();
};

const previewImages = document.querySelectorAll(".previewImage");
const handleSelectedImage = () => {
  previewImages.forEach((img, index) => {
    if (index === selectedImageIndex) {
      img.classList.add("highlight");
      img.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      img.classList.remove("highlight");
    }
  });
};

const showNavButtons = () => {
  if (selectedImageIndex === imageUrl.length-1) {
    prevBtn.classList.remove("hidden");
    nextBtn.classList.add("hidden");
  } else if (selectedImageIndex === 0) {
    prevBtn.classList.add("hidden");
    nextBtn.classList.remove("hidden");
  } else {
    prevBtn.classList.remove("hidden");
    nextBtn.classList.remove("hidden");
  }
};

nextBtn.onclick = () => {
  if (selectedImageIndex < imageUrl.length) {
    selectedImageIndex++;
    selectedImage.setAttribute("src", imageUrl[selectedImageIndex]);
  }
  showNavButtons();
  handleSelectedImage();
};

prevBtn.onclick = () => {
  if (selectedImageIndex>0) {
    selectedImageIndex--;
    selectedImage.setAttribute("src", imageUrl[selectedImageIndex]);
  }
  showNavButtons();
  handleSelectedImage();
};


previewBox.onclick = (e) => {
  previewBox.style.display = "none";
};

previewContainer.onclick = (e) => {
  e.stopPropagation();
};

previewSliderContainer.onclick = (e) => {
  e.stopPropagation();
};
