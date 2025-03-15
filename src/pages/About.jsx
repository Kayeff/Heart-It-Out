import WaveSection from "../components/WaveSection";
import wave7 from "../assets/wave7.svg";
import wave4 from "../assets/wave-4.svg";
import wave3 from "../assets/wave-3.svg";
import tahazaidi from "../assets/tahazaidi.webp";
import building from "../assets/building.webp";
import building2 from "../assets/building-2.webp";
import Button from "../components/Button";
import Heading from "../components/Heading";
import SpanText from "../components/SpanText";
import { team_data } from "../data/team";
import TeamMember from "../components/TeamMember";
import team from "../assets/team.webp";

export default function About() {
  return (
    <main className="w-full min-h-screen">
      <div className="w-full flex items-center justify-center py-10">
        <div className="flex items-center justify-center flex-col space-y-4 py-8">
          <Heading
            text={"We are"}
            spanText={"Heart it Out"}
            color={"text-prussian-blue"}
          />
          <p className="w-[50%] text-center text-lg text-prussian-blue">
            We are visionaries who have come together to help people explore,
            express, and learn more about themselves. We focus on targeted
            prevention and superior quality of care.
          </p>
        </div>
      </div>
      <div className="w-full bg-health-green">
        <WaveSection src={wave7} />
      </div>
      <div className="w-full bg-health-green text-anti-flash-white py-10 flex items-center justify-center flex-col space-y-4">
        <div className="w-[70%] grid grid-cols-2 gap-4 text-prussian-blue">
          <div className="w-full flex items-start justify-between flex-col">
            <div className="grid grid-rows-1 gap-4">
              <div className="space-y-4 bg-anti-flash-white shadow-cards p-6 rounded-3xl">
                <h1 className="tracking-tight text-5xl font-bold">
                  Our <SpanText text="Mission" className="text-health-green" />
                </h1>
                <p className="text-lg tracking-tight">
                  We provide you health care with a personal approach and high
                  quality. Care that we would choose for ourselves. We will
                  provide versatile, quality care that caters to various mental
                  health concerns while adhering to sustainable goals. Health is
                  a fundamental right of every human being. We are on a journey
                  to make mental health care accessible to 1.5 billion people by
                  2030.
                </p>
              </div>
              <div className="space-y-4 bg-anti-flash-white shadow-cards p-6 rounded-3xl">
                <h1 className="font-bold text-5xl tracking-tight">
                  Our <SpanText text="Story" className="text-health-green" />
                </h1>
                <p className="text-lg tracking-tight">
                  Heart It Out began as a room on the roof in a quaint
                  neighbourhood, offering a safe space for people to express
                  themselves freely. By 2030, we dream to be an organisation
                  that enables 1.5 billion people to have on demand access to
                  mental healthcare.
                </p>
                <p className="text-lg tracking-tight">
                  Our goal to develop a solution-driven initiative has steadily
                  materialised and strengthened into a holistic,
                  technology-based platform with global impact.
                </p>
                <p className="text-lg tracking-tight">
                  When we started providing psychotherapy to people battling
                  mental health concerns such as anxiety and depression in 2018,
                  we quickly realised that psychotherapy alone was not enough.
                  Since then, we have created a range of services rooted in
                  South Asian cultures and informed by socio-political reality.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-start gap-4 flex-col">
            <img
              className="w-full h-96 object-bottom object-cover rounded-3xl shadow-cards"
              src={building}
              alt=""
            />
            <img
              className="w-full h-96 object-cover rounded-3xl shadow-cards"
              src={building2}
              alt="building"
            />
          </div>
        </div>
        <div className="w-[70%] flex items-center justify-between bg-anti-flash-white shadow-cards p-6 rounded-3xl">
          <p className="text-lg text-prussian-blue font-medium">
            Loved our story?
          </p>
          <div className="flex items-start justify-end space-x-3">
            <Button
              title="Mentor Us"
              css="text-prussian-blue border-prussian-blue border bg-transparent hover:bg-health-green hover:text-anti-flash-white rounded-full py-3"
            />
            <Button
              title="Volunteer"
              css="text-prussian-blue border-prussian-blue border bg-transparent hover:bg-health-green hover:text-anti-flash-white rounded-full py-3"
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-health-green">
        <WaveSection src={wave4} />
      </div>
      <div className="w-full flex items-center justify-center py-10">
        <div className="w-[70%] grid grid-cols-2 py-10 gap-4">
          <div className="w-full h-full flex items-center justify-center">
            <img
              className="w-96 object-cover shadow-black-button rounded-3xl"
              src={tahazaidi}
              alt="founderIMG"
              loading="lazy"
            />
          </div>
          <div className="flex items-start justify-start flex-col space-y-8 text-prussian-blue">
            <div className="space-y-1">
              <h1 className="tracking-tight text-7xl font-bold">Taha Zaidi</h1>
              <p className="text-lg font-bold text-end">
                Founder of{" "}
                <span className="text-health-green">Heart it Out!</span>
              </p>
            </div>
            <div className="w-full">
              <p className="text-pretty font-bold text-xl">
                "Without Haste and Without Pause"
              </p>
              <p className="font-medium text-xl">
                Taha is a problem solver and the founder of Heart It Out. As our
                chief innovator, Taha creates strategies that can benefit our
                digital communities, with an emphasis on mental health and
                well-being. Taha leverages his learnings and cross-domain
                experience to bridge the gaps in mental healthcare in India
              </p>
            </div>
            <div className="w-full flex items-end justify-start space-x-1">
              <h1 className="text-lg font-medium">More on</h1>
              <a
                href="https://www.linkedin.com/in/tahazaidi/"
                target="_blank"
                className="hover:text-health-green duration-300 font-bold text-xl"
              >
                Linked In
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <WaveSection src={wave3} />
      </div>
      <div className="w-full bg-health-green py-10 flex items-center justify-center flex-col space-y-10">
        <div className="w-[70%] flex items-center justify-center flex-col space-y-8">
          <div className="flex items-center justify-center">
            <h1 className="text-5xl font-bold tracking-tight text-center text-anti-flash-white">
              Our <SpanText text="Team" />
            </h1>
          </div>
          <div className="w-full grid grid-cols-5 gap-4">
            {team_data.map((team) => (
              <TeamMember key={team.id} member={team} />
            ))}
          </div>
        </div>
        <div className="w-[70%] flex items-center justify-center flex-col space-y-8">
          <div className="w-full grid grid-cols-2 gap-4">
            <img
              className="rounded-3xl w-full object-cover shadow-cards"
              src={team}
              alt=""
              loading="lazy"
            />
            <div className="w-full flex flex-col items-start justify-between space-y-4 bg-whitesmoke p-6 rounded-3xl shadow-cards">
              <div className="space-y-4">
                <h1 className="tracking-tight text-5xl font-bold text-prussian-blue">
                  Culture &{" "}
                  <SpanText text="Traditions" className="text-health-green" />
                </h1>
                <p className="text-lg font-medium text-prussian-blue">
                  We embrace a diverse, inclusive, and compassionate work
                  culture. From month-end parties to insightful masterclasses
                  and birthday/anniversary celebrations, we revel in each
                  other's contributions to and presence at Heart It Out. We
                  appreciate creativity and engage in continuous learning and
                  growth as we break new ground both professionally and
                  individually. And by encompassing mental health care, we
                  welcome a healthy environment into our workplaces.
                </p>
              </div>
              <div className="w-full flex items-center justify-center">
                <Button
                  title="Join Us"
                  css="w-[40%] bg-prussian-blue text-anti-flash-white hover:bg-health-green"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
