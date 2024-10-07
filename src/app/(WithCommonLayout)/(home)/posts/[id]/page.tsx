import RightSidebar from '@/src/components/modules/common/home/RightSidebar';
import PostDetails from '@/src/components/ui/home/PostDetails';

export default function PostDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  return (
    <>
      <div className="home-layout flex justify-between w-full items-start h-full bg-white dark:bg-black text-gray-800 dark:text-gray-200">
        <div className="main-content w-full lg:px-4">
          <PostDetails id={id} />
        </div>
        <div className="right-sidebar md:w-96 hidden lg:block sticky top-0">
          <RightSidebar />
        </div>
      </div>
    </>
  );
}
