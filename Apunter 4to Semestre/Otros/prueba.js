function getGrade (s1, s2, s3) {
    grade = 'F'
    score = (s1+s2+s3)/3;
    if (score > 90) grade = 'A'
    else if (score > 80) grade = 'B'
    else if (score > 70) grade = 'C'
    else if (score > 60) grade = 'D'
    return grade;
    }

    console.log(getGrade(50,90,80)) // B
    console.log(getGrade(50,50,50)) // F
    console.log(getGrade(90,90,90)) // A
    console.log(getGrade(100,85,96)) // A
    console.log(getGrade(100,100,100)) // A
    console.log(getGrade(99,99,99)) // A