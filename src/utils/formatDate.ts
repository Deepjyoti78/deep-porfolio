export function formatDate(date: string, includeRelative = false) {
  const currentDate = new Date();

  let dateString = date;
  if (!dateString.includes("T")) {
    dateString = `${dateString}T00:00:00`;
  }

  const targetDate = new Date(dateString);
  const timeDifference = currentDate.getTime() - targetDate.getTime();
  const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));
  const minutesAgo = Math.floor(timeDifference / (1000 * 60));
  const secondsAgo = Math.floor(timeDifference / 1000);

  let formattedDate = "";

  if (daysAgo >= 365) {
    formattedDate = `${Math.floor(daysAgo / 365)}y ago`;
  } else if (daysAgo >= 30) {
    formattedDate = `${Math.floor(daysAgo / 30)}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else if (hoursAgo > 0) {
    formattedDate = `${hoursAgo}h ago`;
  } else if (minutesAgo > 0) {
    formattedDate = `${minutesAgo}m ago`;
  } else {
    formattedDate = "just now";
  }

  const fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const timeStr = targetDate.toLocaleString("en-us", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  if (!includeRelative) {
    return `${fullDate} · ${timeStr}`;
  }

  return `${fullDate} (${formattedDate})`;
}
