

export const calculateBmi = (height: number, weight: number) : string | void => {
    const result =  weight / (Math.pow(height/100, 2));

    if (result < 15) return 'Very severely underweight';
    if (result >= 15 && result < 16) return 'Severely underweight';
    if (result >= 16 && result < 18.5) return 'Underweight';
    if (result >= 18.5 && result < 25) return 'Normal (healthy weight)';
    if (result >= 25 && result < 30) return 'Overweight';
    if (result >= 30 && result < 35) return 'Obese Class I (Moderately obese)';
    if (result >= 35 && result < 40) return 'Obese Class II (Severely obese)';
    if (result >= 40) return 'Obese Class III (Very severely obese)';
};

interface BMIValues {
    height: number;
    weight: number;
}



const parseArguments = (args: Array<string>): BMIValues => {
	if (args.length < 4) throw new Error("There must be 2 arguments; please provide another argument.");
	if (args.length > 4) throw new Error("There must be only 2 arguments; too many arguments provided.");

	if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
		return {
			height: Number(args[2]),
			weight: Number(args[3]),
		};
	} else {
		throw new Error("Please only enter numbers for values!");
	}
};

try {
	const { height, weight } = parseArguments(process.argv);
	console.log(calculateBmi(height, weight));
} catch (e) {
	console.log('Error, something bad happened, message: ', e.message);
}
