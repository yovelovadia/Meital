var score = 97;
var numberOfQuestions = 0;

var scoreShow = document.createElement("h1"); // score
scoreShow.innerHTML = score + " :פרופיל";
scoreShow.classList = "score";

var questionsRemain = document.createElement("h1"); //questions remain show
questionsRemain.innerHTML = 12 - numberOfQuestions + " :שאלות";
questionsRemain.classList = "questionRemain";

document.body.appendChild(scoreShow);
document.body.appendChild(questionsRemain);

function ending() {
  if (numberOfQuestions === 12) {
    //ending after 12 questions finished
    var summery = document.createElement("h1");
    summery.classList = "summery";
    if (score === 97) {
      summery.innerHTML = "ישר לקרבי! עסק בנוי לתלפיות!";
    } else if (score >= 80 && score <= 88) {
      summery.innerHTML =
        "עסק במצב סביר שיכול לגדול תוך כדי קשיים מסוימים, מדי פעם ישנה התמודדות יוצאת דופן אך המצב הזה לא באמת מאפיין את היום יום של העסק. העובדים יציבים ויודעים את עבודתם, אך ישנו הפסד כספי של 5%-10% בשל כשלים נקודתיים במבנה הארגוני";
    } else if (score >= 64 && score <= 72) {
      summery.innerHTML =
        "עסק במאבק עם יכולת להחזיק את עצמו רווחי לעיתים, אך הבעלים עסוק מדי בלשלם לאחרים מאשר לעצמו. עסק מעייף, מתיש, הכל נופל על כתפיים בודדות מדי למרות שמשלמים משכורות, העסק לא בנוי נכון, אין מספיק דרישה לתפוקה, נעשים הרבה ויתורים, יש הרבה אי בהירויות לגבי איך דברים צריכים להתבצע. דברים נופלים בין הכיסאות וזה עלול לפגוע במוניטין העסק. ";
    } else {
      summery.innerHTML =
        "עסק מתיש, מנהלים עמוסים עד כדי פגיעה בבריאותם, לא תמיד אפשר למשוך משכורת, בזבוז משאבים כרוני,  עסק בסכנה קיומית, או לסגור או לשנות בסיס פעולה באופן מיידי. ";
    }
    document.getElementById("pageContainer").appendChild(summery);
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }
}

function createQuestion(questionAsked) {
  var container = document.createElement("div"); //creating the container for each question
  container.classList = "questionContainer";

  var yesNoContainer = document.createElement("div");
  yesNoContainer.classList = "yesNoContainer";

  var question = document.createElement("h1"); //creating the elements
  var yesButton = document.createElement("button");
  var noButton = document.createElement("button");
  question.innerHTML = questionAsked;
  yesButton.innerHTML = "כן";
  noButton.innerHTML = "לא";
  yesButton.classList = "button";
  noButton.classList = "button";

  var xImage = document.createElement("img"); //gathering the images and not displaying them and adding a class to them
  xImage.src = "./cross.png";
  xImage.classList = "cross";

  var vImage = document.createElement("img"); //gathering the images and not displaying them and adding a class to them
  vImage.src = "./check.png";
  vImage.classList = "check";

  function yesButtonFunction() {
    // what happens when yes button clicked
    if (numberOfQuestions === 0) {
      score = score - 9;
    } else {
      score = score - 8;
    }

    xImage.style.display = "flex";
    numberOfQuestions += 1;
    scoreShow.innerHTML = score + " :פרופיל";
    questionsRemain.innerHTML = 12 - numberOfQuestions + " :שאלות";

    yesButton.removeEventListener("click", yesButtonFunction); // changing score
    noButton.removeEventListener("click", nobuttonfunction); // removing nobutton event listener
    ending();
  }

  function nobuttonfunction() {
    // what happens when no button clicked

    numberOfQuestions += 1;
    questionsRemain.innerHTML = 12 - numberOfQuestions + " :שאלות";
    vImage.style.display = "flex";
    yesButton.removeEventListener("click", yesButtonFunction); //canceling yesbutton event listener
    ending();
  }

  yesButton.addEventListener("click", yesButtonFunction);
  noButton.addEventListener("click", nobuttonfunction);

  yesNoContainer.appendChild(yesButton);
  yesNoContainer.appendChild(noButton);
  yesNoContainer.appendChild(xImage);
  yesNoContainer.appendChild(vImage);
  container.appendChild(question);
  container.appendChild(yesNoContainer);
  document.getElementById("pageContainer").appendChild(container);
}

createQuestion("תחלופה גבוהה בכח אדם ");
createQuestion("כח אדם לא מספיק טוב נבחר לתפקידים");
createQuestion(
  "לא ברור מי מחזיק באיזה תפקיד ויש שינויים בהגדרות תפקיד כל הזמן"
);
createQuestion("כח אדם שעושה טעויות שגורמות להפסדים כספים");
createQuestion("כח אדם שעושה טעויות שגורמות לפגיעה במוניטין");
createQuestion("כח אדם שעושה טעויות שגורמות ללקוחות לעזוב");
createQuestion("טעויות שחוזרות על עצמן והופכות לעניין שבשגרה בעסק");
createQuestion("עסק לא רווחי למרות שנעשות פעולות שיווק ויש מכירות");
createQuestion("מנהלים מותשים שהכל נופל עליהם ואין להם זמן לבנות את העסק");
createQuestion("מנהלים שעושים את העבודה של מישהו שמשלמים לו לעשות את העבודה");
createQuestion(
  "מנהלים שאין להם מושג אמיתי מה ההספק של כל עובד ומנהלים לפי תחושות"
);
createQuestion("מצבי חירום ומצבי קיצון הם שגרת העסק");
