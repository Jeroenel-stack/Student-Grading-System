 function gradeStudent(scores) {
            console.log("Original Scores:", scores);

            if (scores.length > 3) {
                const minScore = Math.min(...scores);
                const index = scores.indexOf(minScore);
                scores.splice(index, 1);
                console.log(`Dropped lowest score (${minScore}). Remaining:`, scores);
            }

            const total = scores.reduce((sum, score) => sum + score, 0);
            const average = total / scores.length;

            let grade = '';
            if (average >= 90) grade = 'A';
            else if (average >= 80) grade = 'B';
            else if (average >= 70) grade = 'C';
            else if (average >= 60) grade = 'D';
            else grade = 'F';

            console.log(`Average Score: ${average.toFixed(2)}`);
            console.log(`Letter Grade: ${grade}`);
        }

        gradeStudent([85, 92, 78, 88, 67]);