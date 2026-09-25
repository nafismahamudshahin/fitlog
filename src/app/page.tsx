import HeroBanner from "@/components/HeroBanner";
import WorkoutLibrary from "@/components/WorkoutLibrary";
import WorkoutSkeleton from "@/components/WorkoutSkeleton";
import { Suspense } from "react";

const Home = () => {
  return (
    <section>
      <HeroBanner></HeroBanner>
      <Suspense fallback={<WorkoutSkeleton></WorkoutSkeleton>}>
        <WorkoutLibrary></WorkoutLibrary>
      </Suspense>
    </section>
  );
};

export default Home;