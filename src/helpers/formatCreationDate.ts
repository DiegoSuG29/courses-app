export default function formatCreationDate(date: string): string {
    date = date.replaceAll("/", ".");
    return date;

}