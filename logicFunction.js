function getNumbers(year, month, day, hour, minute, clickNumber) {

    function seperateNumbers(num) {
        var out = [];
        var str = '';
        if(typeof num === 'string') {
            str = num;
        }
        else if(typeof num === 'number') {
            str = num.toString();
        }

        if(str.length > 0) {
            var strArray = str.split('');
            strArray.forEach(function(char){
                if('0' <= char && char <= '9') {
                    out.push(parseInt(char));
                }
                else {
                    console.warn('invalid number char : ', num);
                }
            });
        }
        return out;
    }

    function getCircle(year, month, day) {
        var circle = [];
        for(var i = 0; i < 10; i++) {
            // 0, 1, 2, 3, 4, 5, 6, 7, 8 ,9
            circle[i] = 0;
        }

        seperateNumbers(year).forEach(function(num) {
            circle[num]++;
        });
        seperateNumbers(month).forEach(function(num) {
            circle[num]++;
        });
        seperateNumbers(day).forEach(function(num) {
            circle[num]++;
        });

        if(Number(month) < 10 ) {
            circle[0]++;
        }
        if(Number(day) < 10) {
            circle[0]++;
        }

        return circle;
    }

    function getTriangle(masterNumberObj) {
        return masterNumberObj.acquiredNumber;
    }

    function getRectangle(masterNumberObj) {
        return masterNumberObj.masterFateNumber;
    }

    function sumUpPoints(circles, triangle, rectangle) {
        var p = [];
        for(var i = 0; i < 10; i++) {
            p[i] = 0;
        }

        for(var j = 0; j < 10; j++) {
            p[j] = circles[j];
        }

        if(triangle !== undefined) {
            for(var k = 0; k < triangle.length; k++) {
                p[ triangle[k] ]++;
            }
        }

        if(triangle !== undefined) {
            p[ rectangle ]++;
        }

        return p;
    }

    function getLines(points, clickNumber) {
        var p = points;
        var lines = [];

        if(typeof clickNumber === 'number' || typeof clickNumber === 'string') {
            clickNumber = Number(clickNumber);

            for(var i = 0; i < 10; i++) {
                if(i === clickNumber)
                    continue;

                if(p[i] > 1) {
                    if( (clickNumber === 1 && (i!==6 && i!==8)) ||
                        (clickNumber === 2 && (i!==7 && i!==9)) ||
                        (clickNumber === 3 && (i!==4 && i!==8)) ||
                        (clickNumber === 4 && (i!==3 && i!==9)) ||
                        (clickNumber === 6 && (i!==1 && i!==7)) ||
                        (clickNumber === 7 && (i!==2 && i!==6)) ||
                        (clickNumber === 8 && (i!==1 && i!==3)) ||
                        (clickNumber === 9 && (i!==2 && i!==4))
                    ) {
                        lines.push({start: i, end: clickNumber, arrow: true})
                    }
                }
            }
        }
        else {
            if(p[1]>0 && p[2]>0 && p[3]>0)
                lines.push( {start:1, end:3, arrow:false} );
            if(p[4]>0 && p[5]>0 && p[6]>0)
                lines.push( {start:4, end:6, arrow:false} );
            if(p[7]>0 && p[8]>0 && p[9]>0)
                lines.push( {start:7, end:9, arrow:false} );
            if(p[1]>0 && p[4]>0 && p[7]>0)
                lines.push( {start:1, end:7, arrow:false} );
            if(p[2]>0 && p[5]>0 && p[8]>0)
                lines.push( {start:2, end:8, arrow:false} );
            if(p[3]>0 && p[6]>0 && p[9]>0)
                lines.push( {start:3, end:9, arrow:false} );
            if(p[1]>0 && p[5]>0 && p[9]>0)
                lines.push( {start:1, end:9, arrow:false} );
            if(p[3]>0 && p[5]>0 && p[7]>0)
                lines.push( {start:3, end:7, arrow:false} );
            if(p[2]>0 && p[4]>0)
                lines.push( {start:2, end:4, arrow:false} );
            if(p[2]>0 && p[6]>0)
                lines.push( {start:2, end:6, arrow:false} );
            if(p[6]>0 && p[8]>0)
                lines.push( {start:6, end:8, arrow:false} );
            if(p[4]>0 && p[8]>0)
                lines.push( {start:4, end:8, arrow:false} );
        }

        return lines;
    }

    function getOldLines(circles, triangle, rectangle, clickNumber) {
        var p = sumUpPoints(circles, triangle, rectangle);
        return getLines(p, clickNumber);
    }

    function getYoungLines(circles, clickNumber) {
        var p = sumUpPoints(circles);
        return getLines(p, clickNumber);
    }

    function getMasterNumber(year, month, day, exp) {
        var sum1 = 0, sum2 = 0;
        var masterFateNumber = 0;
        var acquiredNumber = [];
        var acquiredNumberString = '';

        if(typeof exp === 'number') {
            // for level number calculating
            if(typeof year === 'string') {
                sum1 = parseInt(year);
            }
            else if(typeof year === 'number'){
                sum1 = year
            }
            sum1 += exp;
        }
        else {
            // normal case
            seperateNumbers(year).forEach(function(num) {
                sum1 += num;
            });
            seperateNumbers(month).forEach(function(num) {
                sum1 += num;
            });
            seperateNumbers(day).forEach(function(num) {
                sum1 += num;
            });
        }

        seperateNumbers(sum1).forEach(function(num) {
            sum2 += num;
            acquiredNumber.push(num);
        });

        masterFateNumber = sum2;
        acquiredNumberString = sum1 + '/' + sum2;

        // might not happen
        if(sum2 >= 10) {
            var sum3 = 0;
            seperateNumbers(sum2).forEach(function(num) {
                sum3 += num;
                acquiredNumber.push(num);
            });

            masterFateNumber = sum3;
            acquiredNumberString += '/' + sum3;
        }

        return {
            masterFateNumber : masterFateNumber,
            acquiredNumber : acquiredNumber,
            acquiredNumberString : acquiredNumberString,
            exp : sum1
        }
    }

    function getLevelNumber(year, month, day, hour, minute) {
        var levelSum = [];
        var secretNumber = [];
        var outputSecretNumber = [];
        for (var i = 0; i < 5; i++) {
            levelSum[i] = 0;
            secretNumber[i] = '';
            outputSecretNumber[i] = '';
        }

        seperateNumbers(year).forEach(function(num) {
            levelSum[0] += num;
        });
        seperateNumbers(month).forEach(function(num) {
            levelSum[1] += num;
        });
        seperateNumbers(day).forEach(function(num) {
            levelSum[2] += num;
        });
        seperateNumbers(hour).forEach(function(num) {
            levelSum[3] += num;
        });
        seperateNumbers(minute).forEach(function(num) {
            levelSum[4] += num;
        });

        secretNumber[0] = getMasterNumber(year);
        secretNumber[1] = getMasterNumber(levelSum[1], null, null, secretNumber[0].exp);
        secretNumber[2] = getMasterNumber(levelSum[2], null, null, secretNumber[1].exp);
        if(hour.length > 0) {
            secretNumber[3] = getMasterNumber(levelSum[3], null, null, secretNumber[2].exp);

            if(minute.length > 0) {
                secretNumber[4] = getMasterNumber(levelSum[4], null, null, secretNumber[3].exp);
            }
        }

        for (var j = 0; j < 5; j++) {
            if(secretNumber[j].acquiredNumberString !== undefined)
                outputSecretNumber[j] = secretNumber[j].acquiredNumberString;
        }

        return outputSecretNumber;
    }

    // Start here
    var masterNumber = getMasterNumber(year, month, day);
    var circle = getCircle(year, month, day);
    var triangle = getTriangle(masterNumber);
    var rectangle = getRectangle(masterNumber);

    return {
        masterNumber : masterNumber.masterFateNumber,
        acquiredNumberString : masterNumber.acquiredNumberString,
        levelNumber : getLevelNumber(year, month, day, hour, minute),
        circle : circle,
        triangle : triangle,
        rectangle: rectangle,
        oldLines : getOldLines(circle, triangle, rectangle, clickNumber),
        youngLines : getYoungLines(circle, clickNumber)
    }
}
