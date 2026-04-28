import ReviewService from "@/services/ReviewService";

export function getStarStatus(n, ratingData) {
   if (!ratingData) ratingData = []
  const rating = getAverageRating(ratingData)

  if (n <= Math.floor(rating)) {
    return 'star-filled';
  } 
  if (n === Math.ceil(rating) && rating % 1 !== 0) {
    return 'star-half'; 
  }
  return 'star-empty';
}

export function getAverageRating(ratingData){
  let rating = 0;

  if (Array.isArray(ratingData)) {
    if (ratingData.length === 0) {
      rating = 0;
    } else {
      const sum = ratingData.reduce((accumulator, current) => accumulator + current.rating, 0);
      rating = sum / ratingData.length;
    }
  } else {
    rating = ratingData || 0;
  }
  return rating
}
