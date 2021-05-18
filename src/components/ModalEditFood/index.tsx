import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

interface FoodItem {
  id: string;
  name: string;
  image: string;
  description: string;
  available: boolean;
  price: string;
}

interface ModalEditProps {
  isOpen: boolean;
  editingFood: FoodItem;
  setIsOpen(): void;
  handleUpdateFood(food: FoodItem): void;
}

function ModalEditFood({isOpen, setIsOpen, handleUpdateFood, editingFood}: ModalEditProps) {
 
  const formRef = useRef(null);

  const handleSubmit = async (data: FoodItem) => {

    handleUpdateFood(data);
    setIsOpen();
  };


    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
          <h1>Editar Prato</h1>
          <Input name="image" placeholder="Cole o link aqui" />

          <Input name="name" placeholder="Ex: Moda Italiana" />
          <Input name="price" placeholder="Ex: 19.90" />

          <Input name="description" placeholder="Descrição" />

          <button type="submit" data-testid="edit-food-button">
            <div className="text">Editar Prato</div>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
  
};

export default ModalEditFood;
