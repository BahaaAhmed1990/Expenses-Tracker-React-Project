import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { GlobalContext } from "../../context";

export default function TransactionForm({ isOpen, onClose }) {
  const { formData, setFormData, value, setValue, handleFormSubmit } =
    useContext(GlobalContext);

  function handleInputChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  function onHandleFormSubmit(e) {
    e.preventDefault();
    handleFormSubmit(formData);
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"4xl"}>
      <form onSubmit={onHandleFormSubmit}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new transaction</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Enter description</FormLabel>
              <Input
                type="text"
                placeholder="description"
                name="description"
                value={formData.descroption}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Enter amount</FormLabel>
              <Input
                type="number"
                placeholder="amount"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
              />
            </FormControl>
            <RadioGroup value={value} onChange={setValue}>
              <Radio
                checked={formData.type === "income" ? true : false}
                colorScheme="green"
                name="type"
                value="income"
                onChange={handleInputChange}
              >
                income
              </Radio>
              <Radio
                checked={formData.type === "expenses" ? true : false}
                colorScheme="red"
                name="type"
                value="expenses"
                onChange={handleInputChange}
              >
                expense
              </Radio>
            </RadioGroup>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>cancel</Button>
            <Button type="submit">submit</Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}
