interface DailyExcersise {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
  }

  const parseArgs = (args: string[]): number[]=> {

    const params = args.slice(2).map((arg) => Number(arg));
    console.log(params);
    return params;
};

export const calculateExercises = (target: number, exerciseHours: number[]): DailyExcersise => {

  const periodLength: number = exerciseHours.length;

  const daysTraining: number[] = exerciseHours.filter(day => day !== 0);

  const trainingDays: number = daysTraining.length;

  const totalTrainingHours = daysTraining.reduce(
      (hours: number, total: number) => hours + total, 
      0
  );


  const average = totalTrainingHours / periodLength;

  const success: boolean = 
    average >= target ? 
    true :
    false;

    const weeklyResult = average / target;
    let rating = 0;
    let ratingDescription = '';

    if ( weeklyResult > 1) {
        rating = 1;
        ratingDescription = "Well done, you did a lot this week!";
    } else if ( weeklyResult > 1.5 ) {
        rating = 2;
        ratingDescription = "You did a fair job this week - keep pushing yourself to continue a bit longer for next week.";
    } else {
        rating = 3;
        ratingDescription= "You didn't meet your target for this week. Try to commit to reaching your target next week.";
    }

    return {
    periodLength,
	trainingDays,
	target,
	average,
	success,
	rating,
	ratingDescription,    
    };
};

try {
	const [target, ...values] = parseArgs(process.argv);
	console.log(calculateExercises(target, values));
} catch (e) {
	console.log("Error, something bad happened, message: ", e.message);
}