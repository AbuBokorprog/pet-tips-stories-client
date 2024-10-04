'use client';
import React from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Textarea,
  Input,
} from '@nextui-org/react';
import { Controller, useForm } from 'react-hook-form';
import { useUpdateUserMutation } from '@/src/hooks/user/user.hook';

const ProfileUpdate = ({ user }: { user: any }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { mutate: updateUser, isPending, isSuccess } = useUpdateUserMutation();

  const onSubmit = (e: any) => {
    e.preventDefault();

    // const formData = new FormData();
    // const file = e.target.profilePicture.files[0];
    // const userData = {
    //   username: e.target.username.value,
    //   bio: e.target.bio.value,
    // };
    // formData.append('data', JSON.stringify(userData));
    // formData.append('profilePicture', file);

    const data = {
      username: e.target.username.value,
      bio: e.target.bio.value,
      profilePicture: e.target.profilePicture.value,
    };
    updateUser(data);
  };

  return (
    <>
      <Button color="primary" variant="flat" className="mt-4" onPress={onOpen}>
        Edit Profile
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="md"
        className="max-w-full lg:max-w-2xl h-full lg:m-0"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Update Profile
              </ModalHeader>

              <form onSubmit={onSubmit} className="space-y-4">
                <ModalBody>
                  <Input
                    name="username"
                    label="Username"
                    placeholder="Enter your username"
                    defaultValue={user?.username}
                    // required
                  />
                  <div className="">
                    <Textarea
                      name="bio"
                      label="Bio"
                      placeholder="Enter your bio"
                      defaultValue={user?.bio}
                    />
                  </div>
                  {/* <div className="">
                    <Input
                      name="profilePicture"
                      type="file"
                      label="Profile Picture"
                      accept="image/*"
                    />
                  </div> */}
                  <Input
                    name="profilePicture"
                    type="text"
                    label="Profile Picture"
                    placeholder="Enter your profile picture url"
                    defaultValue={user?.profilePicture}
                    // required
                  />
                </ModalBody>
                <ModalFooter className="flex justify-center gap-2">
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cancel
                  </Button>
                  <Button type="submit" color="primary" onPress={onClose}>
                    Save
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileUpdate;
