function solve(pages,hours,days){

    let totalPages = Number(pages);
    let totalHours = Number(hours);
    let totalDays = Number(days);

    let pagesPerDay = totalPages / totalHours;
    let dayNeed = pagesPerDay / totalDays;

    console.log(dayNeed)


}
solve(212,20,2)