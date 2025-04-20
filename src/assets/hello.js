function calculateDaysBetweenDates(begin, end) {
    const startDate = new Date(begin);
    const endDate = new Date(end);

    // Calculate the difference in milliseconds
    const differenceInTime = endDate.getTime() - startDate.getTime();

    // Convert milliseconds to days
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));

    return differenceInDays;
    }
