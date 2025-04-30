import type { FC } from 'react';

import { IconButton, Image, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

import images from '@lyte/images';

interface ComponentProps {
  placeholder: string;
  value?: string;
  onChange?: (v: string) => void;
  border?: string;
}

const SearchInput: FC<ComponentProps> = ({ placeholder, value, border, onChange }) => {
  return (
    <InputGroup>
      <Input
        placeholder={placeholder}
        borderRadius="xl"
        py="6"
        pl="12"
        border={border ? border : '1px solid #B0B0B0'}
        bgColor="#F2F2F2"
        _focus={{
          border: '1px solid #E9EAEE',
          boxShadow: '0px 0px 0px 1px #00905329',
        }}
        _placeholder={{ fontSize: 'sm', fontWeight: 'normal', color: '#797F8F' }}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
      />

      <InputLeftElement ml="2" mt="1">
        <IconButton
          bg="transparent"
          aria-label="Search database"
          icon={<Image src={images.search} alt='search' />}
          _hover={{ backgroundColor: 'transparent' }}
        />
      </InputLeftElement>
    </InputGroup>
  );
};

export default SearchInput;
