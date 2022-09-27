// PaidRight - Recruitment challenge 
// ---------------------------------
//
// Please implement the outsideOfSchedule function to the best of 
// your abilities. 
//
// We prefer to write clean code leveraging the 
// type system where possible, no need to optimise performance
// such that your intent is lost to the reader. 
//
// Feel free to modify any of the provided code if it helps you
// implement and reason about the solution. 

enum ShiftCode {
    Ordinary,
    Overtime,
    UnpaidBreak,
    PaidBreak
}

type TaggedInterval = { start: Date, finish: Date, shiftCode: ShiftCode };

enum DayOfWeek { Monday, Tuesday, Wedesday, Thursday, Friday, Saturday, Sunday };
type DurationClock = { 
  hours: number, 
  minutes: number, 

  // duration in seconds
  duration: number 
};

// example weekly schedule
//
//   let weeklySchedule = new Map<DayOfWeek, DurationClock>()
//   // monday 9am to 5pm
//   weeklySchedule.set(DayOfWeek.Monday, { hours: 9, minutes: 0, duration: 28800 })
//   // tuesday 8am to 6pm
//   weeklySchedule.set(DayOfWeek.Tuesday, { hours: 8, minutes: 0, duration: 28800 })
//   // wednesday 8am to 6pm
//   weeklySchedule.set(DayOfWeek.Wedesday, { hours: 8, minutes: 0, duration: 28800 })

type WeeklySchedule = Map<DayOfWeek, DurationClock>;

function outsideOfSchedule(weeklySchedule: WeeklySchedule, shiftCodes: Array<ShiftCode>, shifts: Array<TaggedInterval>): Array<TaggedInterval> {

    return shifts;
}
