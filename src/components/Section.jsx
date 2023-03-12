export default function Section({data}) {
//console.log(data);
const {content} = data;
console.log(content);

    return <div><h2>{content?.missionSubheading}</h2></div>
}
