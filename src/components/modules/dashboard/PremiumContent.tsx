'use client';
import React, { useState, useEffect, useContext } from 'react';
import { Card, CardBody, CardHeader, Button, Divider } from '@nextui-org/react';
import { FaCrown, FaCheckCircle } from 'react-icons/fa';
import { UserContext } from '@/src/provider/user.provider';
import { getPostsByUserIdHook } from '@/src/hooks/posts/posts.hook';
import { PaymentInitialize } from '@/src/hooks/payment/payment.hook';
import { useUserMeHook } from '@/src/hooks/user/user.hook';

const PremiumContent = () => {
  const { user }: any = useContext(UserContext);
  const { data: userMe } = useUserMeHook();

  const {
    mutate: initializePayment,
    data,
    isPending,
    isSuccess,
  } = PaymentInitialize();
  const { data: posts } = getPostsByUserIdHook(user?.id);

  const [isEligible, setIsEligible] = useState(false);

  const totalUpvotes = posts?.data?.reduce(
    (acc: any, post: any) => acc + post.upVotes?.length,
    0
  );

  useEffect(() => {
    if (posts?.data?.length > 0 && totalUpvotes >= 1) {
      setIsEligible(true);
    }
  }, [posts, totalUpvotes]);

  useEffect(() => {
    if (!isPending && isSuccess) {
      if (data?.success) {
        window.location.href = data?.data?.payment_url;
      } else {
        return;
      }
    }
  }, [isPending, isSuccess, data]);

  const premiumFeatures = [
    'Unlimited access to all premium content',
    'Ad-free experience',
    'Priority customer support',
    'Exclusive community access',
    'Early access to new features',
  ];

  const handlePayment = () => {
    const paymentData = { amount: 100 };
    if (isEligible) {
      initializePayment(paymentData);
    }
  };

  return (
    <div>
      <Card className="max-w-3xl mx-auto">
        <CardHeader className="flex gap-3 bg-gradient-to-r from-blue-400 to-blue-600">
          <FaCrown className="text-white text-3xl" />
          <div className="flex flex-col">
            <p className="text-2xl font-semibold text-white">
              Unlock Premium Benefits
            </p>
            <p className="text-small text-white">
              Elevate your experience with our premium features
            </p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <ul className="space-y-4">
            {premiumFeatures.map((feature, index) => (
              <li key={index} className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Divider className="my-6" />
          <div className="text-center">
            <p className="text-2xl font-bold mb-4">Join Premium Today!</p>
            <p className="text-xl font-semibold mb-4">Only $100/month</p>
            {!userMe?.data?.isPremium && (
              <>
                <Button
                  color={isEligible ? 'primary' : 'secondary'}
                  size="lg"
                  endContent={<FaCrown />}
                  className="font-semibold"
                  disabled={!isEligible}
                  onClick={() => handlePayment()}
                >
                  {isEligible
                    ? 'Become a Premium Member'
                    : 'Upgrade to Premium'}
                </Button>
                {!isEligible && (
                  <p className="mt-4 text-sm text-gray-600">
                    To become eligible for premium membership, you need to
                    create at least one post and have a minimum of 1 total
                    upvote across your content.
                  </p>
                )}
              </>
            )}
            {userMe?.data?.isPremium && (
              <p className="mt-4 text-sm text-gray-600">
                You are already a premium member
              </p>
            )}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default PremiumContent;
