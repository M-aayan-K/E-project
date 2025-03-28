document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedbackForm');
    const stars = document.querySelectorAll('.star-rating i');
    const ratingInput = document.getElementById('rating');
    const thankYouMessage = document.getElementById('thankYouMessage');

   
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = this.getAttribute('data-rating');
            ratingInput.value = rating;
            
            stars.forEach(s => {
                if (s.getAttribute('data-rating') <= rating) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });
    });

    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!ratingInput.value) {
            alert('Please rate your overall experience.');
            return;
        }

        
        setTimeout(() => {
            form.reset();
            form.classList.add('hidden');
            thankYouMessage.classList.remove('hidden');
        }, 1000);
    });
});