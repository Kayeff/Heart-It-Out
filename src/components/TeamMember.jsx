export default function TeamMember({ member }) {
  return (
    <div className="rounded-3xl flex flex-col items-center justify-center border border-prussian-blue/20">
      <div className="w-full overflow-hidden rounded-t-2xl">
        <img
          className="rounded-t-2xl w-full object-cover scale-105"
          src={member.image}
          alt={`${member.name} image`}
          loading="lazy"
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center p-2 bg-whitesmoke rounded-b-2xl">
        <h1 className="text-prussian-blue font-semibold text-xl">
          {member.name}
        </h1>
        <p className="text-prussian-blue/70 font-medium">{member.desg}</p>
      </div>
    </div>
  );
}
