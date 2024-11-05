---
sidebar_label: 'NeoVM OpCodes'
---

# Neo Virtual Machine Opcodes

Use this handy table to skip ahead to the [opcode reference](#opcodes).

<table class="table table-bordered opcode">
    <tbody>
        <tr>
            <td><a href="#00">00</a></td>
            <td><a href="#01">01</a></td>
            <td><a href="#02">02</a></td>
            <td><a href="#03">03</a></td>
            <td><a href="#04">04</a></td>
            <td><a href="#05">05</a></td>
            <td></td>
            <td></td>
            <td><a href="#08">08</a></td>
            <td><a href="#09">09</a></td>
            <td><a href="#0A">0A</a></td>
            <td><a href="#0B">0B</a></td>
            <td><a href="#0C">0C</a></td>
            <td><a href="#0D">0D</a></td>
            <td><a href="#0E">0E</a></td>
            <td><a href="#0F">0F</a></td>
        </tr>
        <tr>
            <td><a href="#10">10</a></td>
            <td><a href="#11">11</a></td>
            <td><a href="#12">12</a></td>
            <td><a href="#13">13</a></td>
            <td><a href="#14">14</a></td>
            <td><a href="#15">15</a></td>
            <td><a href="#16">16</a></td>
            <td><a href="#17">17</a></td>
            <td><a href="#18">18</a></td>
            <td><a href="#19">19</a></td>
            <td><a href="#1A">1A</a></td>
            <td><a href="#1B">1B</a></td>
            <td><a href="#1C">1C</a></td>
            <td><a href="#1D">1D</a></td>
            <td><a href="#1E">1E</a></td>
            <td><a href="#1F">1F</a></td>
        </tr>
        <tr>
            <td><a href="#20">20</a></td>
            <td><a href="#21">21</a></td>
            <td><a href="#22">22</a></td>
            <td><a href="#23">23</a></td>
            <td><a href="#24">24</a></td>
            <td><a href="#25">25</a></td>
            <td><a href="#26">26</a></td>
            <td><a href="#27">27</a></td>
            <td><a href="#28">28</a></td>
            <td><a href="#29">29</a></td>
            <td><a href="#2A">2A</a></td>
            <td><a href="#2B">2B</a></td>
            <td><a href="#2C">2C</a></td>
            <td><a href="#2D">2D</a></td>
            <td><a href="#2E">2E</a></td>
            <td><a href="#2F">2F</a></td>
        </tr>
        <tr>
            <td><a href="#30">30</a></td>
            <td><a href="#31">31</a></td>
            <td><a href="#32">32</a></td>
            <td><a href="#33">33</a></td>
            <td><a href="#34">34</a></td>
            <td><a href="#35">35</a></td>
            <td><a href="#36">36</a></td>
            <td><a href="#37">37</a></td>
            <td><a href="#38">38</a></td>
            <td><a href="#39">39</a></td>
            <td><a href="#3A">3A</a></td>
            <td><a href="#3B">3B</a></td>
            <td><a href="#3C">3C</a></td>
            <td><a href="#3D">3D</a></td>
            <td><a href="#3E">3E</a></td>
            <td><a href="#3F">3F</a></td>
        </tr>
        <tr>
            <td><a href="#40">40</a></td>
            <td><a href="#41">41</a></td>
            <td></td>
            <td><a href="#43">43</a></td>
            <td></td>
            <td><a href="#45">45</a></td>
            <td><a href="#46">46</a></td>
            <td></td>
            <td><a href="#48">48</a></td>
            <td><a href="#49">49</a></td>
            <td><a href="#4A">4A</a></td>
            <td><a href="#4B">4B</a></td>
            <td></td>
            <td><a href="#4D">4D</a></td>
            <td><a href="#4E">4E</a></td>
            <td></td>
        </tr>
        <tr>
            <td><a href="#50">50</a></td>
            <td><a href="#51">51</a></td>
            <td><a href="#52">52</a></td>
            <td><a href="#53">53</a></td>
            <td><a href="#54">54</a></td>
            <td><a href="#55">55</a></td>
            <td><a href="#56">56</a></td>
            <td><a href="#57">57</a></td>
            <td><a href="#58">58</a></td>
            <td><a href="#59">59</a></td>
            <td><a href="#5A">5A</a></td>
            <td><a href="#5B">5B</a></td>
            <td><a href="#5C">5C</a></td>
            <td><a href="#5D">5D</a></td>
            <td><a href="#5E">5E</a></td>
            <td><a href="#5F">5F</a></td>
        </tr>
        <tr>
            <td><a href="#60">60</a></td>
            <td><a href="#61">61</a></td>
            <td><a href="#62">62</a></td>
            <td><a href="#63">63</a></td>
            <td><a href="#64">64</a></td>
            <td><a href="#65">65</a></td>
            <td><a href="#66">66</a></td>
            <td><a href="#67">67</a></td>
            <td><a href="#68">68</a></td>
            <td><a href="#69">69</a></td>
            <td><a href="#6A">6A</a></td>
            <td><a href="#6B">6B</a></td>
            <td><a href="#6C">6C</a></td>
            <td><a href="#6D">6D</a></td>
            <td><a href="#6E">6E</a></td>
            <td><a href="#6F">6F</a></td>
        </tr>
        <tr>
            <td><a href="#70">70</a></td>
            <td><a href="#71">71</a></td>
            <td><a href="#72">72</a></td>
            <td><a href="#73">73</a></td>
            <td><a href="#74">74</a></td>
            <td><a href="#75">75</a></td>
            <td><a href="#76">76</a></td>
            <td><a href="#77">77</a></td>
            <td><a href="#78">78</a></td>
            <td><a href="#79">79</a></td>
            <td><a href="#7A">7A</a></td>
            <td><a href="#7B">7B</a></td>
            <td><a href="#7C">7C</a></td>
            <td><a href="#7D">7D</a></td>
            <td><a href="#7E">7E</a></td>
            <td><a href="#7F">7F</a></td>
        </tr>
        <tr>
            <td><a href="#80">80</a></td>
            <td><a href="#81">81</a></td>
            <td><a href="#82">82</a></td>
            <td><a href="#83">83</a></td>
            <td><a href="#84">84</a></td>
            <td><a href="#85">85</a></td>
            <td><a href="#86">86</a></td>
            <td><a href="#87">87</a></td>
            <td><a href="#88">88</a></td>
            <td><a href="#89">89</a></td>
            <td></td>
            <td><a href="#8B">8B</a></td>
            <td><a href="#8C">8C</a></td>
            <td><a href="#8D">8D</a></td>
            <td><a href="#8E">8E</a></td>
            <td></td>
        </tr>
        <tr>
            <td><a href="#90">90</a></td>
            <td><a href="#91">91</a></td>
            <td><a href="#92">92</a></td>
            <td><a href="#93">93</a></td>
            <td></td>
            <td></td>
            <td></td>
            <td><a href="#97">97</a></td>
            <td><a href="#98">98</a></td>
            <td><a href="#99">99</a></td>
            <td><a href="#9A">9A</a></td>
            <td><a href="#9B">9B</a></td>
            <td><a href="#9C">9C</a></td>
            <td><a href="#9D">9D</a></td>
            <td><a href="#9E">9E</a></td>
            <td><a href="#9F">9F</a></td>
        </tr>
        <tr>
            <td><a href="#A0">A0</a></td>
            <td><a href="#A1">A1</a></td>
            <td><a href="#A2">A2</a></td>
            <td><a href="#A3">A3</a></td>
            <td><a href="#A4">A4</a></td>
            <td><a href="#A5">A5</a></td>
            <td><a href="#A6">A6</a></td>
            <td></td>
            <td><a href="#A8">A8</a></td>
            <td><a href="#A9">A9</a></td>
            <td><a href="#AA">AA</a></td>
            <td><a href="#AB">AB</a></td>
            <td><a href="#AC">AC</a></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td><a href="#B1">B1</a></td>
            <td></td>
            <td><a href="#B3">B3</a></td>
            <td><a href="#B4">B4</a></td>
            <td><a href="#B5">B5</a></td>
            <td><a href="#B6">B6</a></td>
            <td><a href="#B7">B7</a></td>
            <td><a href="#B8">B8</a></td>
            <td><a href="#B9">B9</a></td>
            <td><a href="#BA">BA</a></td>
            <td><a href="#BB">BB</a></td>
            <td></td>
            <td></td>
            <td><a href="#BE">BE</a></td>
            <td><a href="#BF">BF</a></td>
        </tr>
        <tr>
            <td><a href="#C0">C0</a></td>
            <td><a href="#C1">C1</a></td>
            <td><a href="#C2">C2</a></td>
            <td><a href="#C3">C3</a></td>
            <td><a href="#C4">C4</a></td>
            <td><a href="#C5">C5</a></td>
            <td><a href="#C6">C6</a></td>
            <td></td>
            <td><a href="#C8">C8</a></td>
            <td></td>
            <td><a href="#CA">CA</a></td>
            <td><a href="#CB">CB</a></td>
            <td><a href="#CC">CC</a></td>
            <td><a href="#CD">CD</a></td>
            <td><a href="#CE">CE</a></td>
            <td><a href="#CF">CF</a></td>
        </tr>
        <tr>
            <td><a href="#D0">D0</a></td>
            <td><a href="#D1">D1</a></td>
            <td><a href="#D2">D2</a></td>
            <td><a href="#D3">D3</a></td>
            <td><a href="#D4">D4</a></td>
            <td></td>
            <td></td>
            <td></td>
            <td><a href="#D8">D8</a></td>
            <td><a href="#D9">D9</a></td>
            <td></td>
            <td><a href="#DB">DB</a></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td><a href="#E0">E0</a></td>
            <td><a href="#E1">E1</a></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
        </tr>
    </tbody>
</table>

## Overview

This opcode set defines instructions for stack operations, compound-type handling, bitwise logic, arithmetic calculations, and more.

- **Constants**

  Constants opcodes push constant values onto the stack. These include instructions for pushing integers of various sizes (e.g., signed integers from 1 byte to 32 bytes), with opcodes ranging from PUSHINT8 to PUSHINT256. Additionally, there are instructions for pushing Boolean values (PUSHT for true and PUSHF for false), pointers (PUSHA), null values (PUSHNULL), data blocks (PUSHDATA1 through PUSHDATA4), and fixed values (PUSHM1 through PUSH16) onto the stack.

- **Flow Control**

  Flow control opcodes manage the program execution flow. They are typically used for conditional jumps, loops, and method calls, enabling the implementation of complex logic control.

- **Stack**

  Stack opcodes handle data manipulation on the stack, supporting push, pop, duplicate, and swap operations. These are crucial for efficient data handling and transfer.

- **Slot**

  The slot opcode manages local variable slots so that data can be stored or retrieved from specific slots, facilitating the management of local variables and parameters.

- **Splice**

  The splice opcode handles splice, split, and extract operations on byte arrays and strings. These instructions can be used to merge multiple data chunks or extract portions of existing data.

- **Bitwise Logic**

  Bitwise logical opcodes perform bitwise operations (e.g., AND, OR, XOR, NOT, etc.) commonly used
  in low-level data processing tasks, such as encryption and compression algorithms.

- **Arithmetic**

  Arithmetic opcodes perform basic mathematical operations (e.g., addition, subtraction, multiplication,
  division), essential for data calculations and numerical processing.

- **Compound-Type**

  Compound-type opcodes manipulate complex data types like arrays, structures, and custom types. These instructions are used to create, modify and destroy complex data types.

- **Types**

  Type opcodes manage data type conversion and checking. They are used to determine the data type or convert one type to another.

- **Extensions**

  Advanced operations with special effects.

## OpCodes

|No.|Name|Stack Input|Stack Output|Expression|Descriptions|
|--- |--- |--- |--- |--- |--- |
|00|PUSHINT8|-|a,|-|Pushes a 1-byte signed integer onto the stack.|
|01|PUSHINT16|-|a,|-|Pushes a 2-byte signed integer onto the stack.|
|02|PUSHINT32|-|a,|-|Pushes a 4-byte signed integer onto the stack.|
|03|PUSHINT64|-|a,|-|Pushes a 8-byte signed integer onto the stack.|
|04|PUSHINT128|-|a,|-|Pushes a 16-byte signed integer onto the stack.|
|05|PUSHINT256|-|a,|-|Pushes a 32-byte signed integer onto the stack.|
|08|PUSHT|-|true,|-|Pushes the boolean value true onto the stack.|
|09|PUSHF|-|false,|-|Pushes the boolean value false onto the stack.|
|0A|PUSHA|-|Pointer,|-|Converts the 4-bytes offset to an Pointer, and pushes it onto the stack..|
|0B|PUSHNULL|-|null,|-|The item null is pushed onto the stack.|
|0C|PUSHDATA1|-|a,|-|The next byte contains the number of bytes to be pushed onto the stack.|
|0D|PUSHDATA2|-|a,|-|The next two bytes contain the number of bytes to be pushed onto the stack.|
|0E|PUSHDATA4|-|a,|-|The next four bytes contain the number of bytes to be pushed onto the stack.|
|0F|PUSHM1|-|-1,|-|The number -1 is pushed onto the stack.|
|10|PUSH0|-|0,|-|The number 0 is pushed onto the stack.|
|11|PUSH1|-|1,|-|The number 1 is pushed onto the stack.|
|12|PUSH2|-|2,|-|The number 2 is pushed onto the stack.|
|13|PUSH3|-|3,|-|The number 3 is pushed onto the stack.|
|14|PUSH4|-|4,|-|The number 4 is pushed onto the stack.|
|15|PUSH5|-|5,|-|The number 5 is pushed onto the stack.|
|16|PUSH6|-|6,|-|The number 6 is pushed onto the stack.|
|17|PUSH7|-|7,|-|The number 7 is pushed onto the stack.|
|18|PUSH8|-|8,|-|The number 8 is pushed onto the stack.|
|19|PUSH9|-|9,|-|The number 9 is pushed onto the stack.|
|1A|PUSH10|-|10,|-|The number 10 is pushed onto the stack.|
|1B|PUSH11|-|11,|-|The number 11 is pushed onto the stack.|
|1C|PUSH12|-|12,|-|The number 12 is pushed onto the stack.|
|1D|PUSH13|-|13,|-|The number 13 is pushed onto the stack.|
|1E|PUSH14|-|14,|-|The number 14 is pushed onto the stack.|
|1F|PUSH15|-|15,|-|The number 15 is pushed onto the stack.|
|20|PUSH16|-|16,|-|The number 16 is pushed onto the stack.|
|21|NOP|-|-|-|The NOP operation does nothing. It is intended to fill in space if opcodes are patched.|
|22|JMP|-|-|-|Unconditionally transfers control to a target instruction. The target instruction is represented as a 1-byte signed offset from the beginning of the current instruction.|
|23|JMP_L|-|-|-|Unconditionally transfers control to a target instruction. The target instruction is represented as a 4-bytes signed offset from the beginning of the current instruction.|
|24|JMPIF|a,|-|-|Transfers control to a target instruction if the value is true, not null, or non-zero. The target instruction is represented as a 1-byte signed offset from the beginning of the current instruction.|
|25|JMPIF_L|a,|-|-|Transfers control to a target instruction if the value is true, not null, or non-zero. The target instruction is represented as a 4-bytes signed offset from the beginning of the current instruction.|
|26|JMPIFNOT|a,|-|-|Transfers control to a target instruction if the value is false, a null reference, or zero. The target instruction is represented as a 1-byte signed offset from the beginning of the current instruction.|
|27|JMPIFNOT_L|a,|-|-|Transfers control to a target instruction if the value is false, a null reference, or zero. The target instruction is represented as a 4-bytes signed offset from the beginning of the current instruction.|
|28|JMPEQ|b, a,|-|-|Transfers control to a target instruction if two values are equal. The target instruction is represented as a 1-byte signed offset from the beginning of the current instruction.|
|29|JMPEQ_L|b, a,|-|-|Transfers control to a target instruction if two values are equal. The target instruction is represented as a 4-bytes signed offset from the beginning of the current instruction.|
|2A|JMPNE|b, a,|-|-|Transfers control to a target instruction when two values are not equal. The target instruction is represented as a 1-byte signed offset from the beginning of the current instruction.|
|2B|JMPNE_L|b, a,|-|-|Transfers control to a target instruction when two values are not equal. The target instruction is represented as a 4-bytes signed offset from the beginning of the current instruction.|
|2C|JMPGT|b, a,|-|-|Transfers control to a target instruction if the first value is greater than the second value. The target instruction is represented as a 1-byte signed offset from the beginning of the current instruction.|
|2D|JMPGT_L|b, a,|-|-|Transfers control to a target instruction if the first value is greater than the second value. The target instruction is represented as a 4-bytes signed offset from the beginning of the current instruction.|
|2E|JMPGE|b, a,|-|-|Transfers control to a target instruction if the first value is greater than or equal to the second value. The target instruction is represented as a 1-byte signed offset from the beginning of the current instruction.|
|2F|JMPGE_L|b, a,|-|-|Transfers control to a target instruction if the first value is greater than or equal to the second value. The target instruction is represented as a 4-bytes signed offset from the beginning of the current instruction.|
|30|JMPLT|b, a,|-|-|Transfers control to a target instruction if the first value is less than the second value. The target instruction is represented as a 1-byte signed offset from the beginning of the current instruction.|
|31|JMPLT_L|b, a,|-|-|Transfers control to a target instruction if the first value is less than the second value. The target instruction is represented as a 4-bytes signed offset from the beginning of the current instruction.|
|32|JMPLE|b, a,|-|-|Transfers control to a target instruction if the first value is less than or equal to the second value. The target instruction is represented as a 1-byte signed offset from the beginning of the current instruction.|
|33|JMPLE_L|b, a,|-|-|Transfers control to a target instruction if the first value is less than or equal to the second value. The target instruction is represented as a 4-bytes signed offset from the beginning of the current instruction.|
|34|CALL|-|-|-|Calls the function at the target address which is represented as a 1-byte signed offset from the beginning of the current instruction.|
|35|CALL_L|-|-|-|Calls the function at the target address which is represented as a 4-bytes signed offset from the beginning of the current instruction.|
|36|CALLA|-|-|-|Pop the address of a function from the stack, and call the function.|
|37|CALLT|-|-|-|Calls the function which is described by the token.|
|38|ABORT|-|-|-|It turns the vm state to FAULT immediately, and cannot be caught.|
|39|ASSERT|a,|-|-|Pop the top value of the stack. If it's false, exit vm execution and set vm state to FAULT.|
|3A|THROW|a,|-|-|Pop the top value of the stack, and throw it.|
|3B|TRY|-|-|-|TRY CatchOffset(sbyte) FinallyOffset(sbyte). If there's no catch body, set CatchOffset 0. If there's no finally body, set FinallyOffset 0.|
|3C|TRY_L|-|-|-|TRY_L CatchOffset(int) FinallyOffset(int). If there's no catch body, set CatchOffset 0. If there's no finally body, set FinallyOffset 0.|
|3D|ENDTRY|-|-|-|Ensures that the appropriate surrounding finally blocks are executed. And then unconditionally transfers control to the specific target instruction, represented as a 1-byte signed offset from the beginning of the current instruction.|
|3E|ENDTRY_L|-|-|-|Ensures that the appropriate surrounding finally blocks are executed. And then unconditionally transfers control to the specific target instruction, represented as a 4-byte signed offset from the beginning of the current instruction.|
|3F|ENDFINALLY|-|-|-|End finally, If no exception happen or be catched, vm will jump to the target instruction of ENDTRY/ENDTRY_L. Otherwise, vm will rethrow the exception to upper layer.|
|40|RET|-|-|-|Returns from the current method.|
|41|SYSCALL|-|-|-|Calls to an interop service.|
|43|DEPTH|-|a,|-|Puts the number of stack items onto the stack.|
|45|DROP|a, b, c,|a, b,|-|Removes the top stack item.|
|46|NIP|a, b, c,|a, c,|-|Removes the second-to-top stack item.|
|48|XDROP|-,|-|-|The item n back in the main stack is removed.|
|49|CLEAR|-,|-|-|Clear the stack|
|4A|DUP|a, b, c,|a, b, c, c,|-|Duplicates the top stack item.|
|4B|OVER|a, b, c,|a, b, c, b,|-|Copies the second-to-top stack item to the top.|
|4D|PICK|a, n, b,|a, n, b, n,|-|The item n back in the stack is copied to the top.|
|4E|TUCK|a, b, c,|a, b, c, c,|-|The item at the top of the stack is copied and inserted before the second-to-top item.|
|50|SWAP|a, b,|b, a,|-|The top two items on the stack are swapped.|
|51|ROT|a, b, c,|b, c, a,|-|The top three items on the stack are rotated to the left.|
|52|ROLL|a, n, c,|a, c, n,|-|The item n back in the stack is moved to the top.|
|53|REVERSE3|a, b, c,|c, b, a,|-|Reverse the order of the top 3 items on the stack.|
|54|REVERSE4|a, b, c, d,|d, c, b, a,|-|Reverse the order of the top 4 items on the stack.|
|55|REVERSEN|n, b, a,|a, b, n,|-|Pop the number N on the stack, and reverse the order of the top N items on the stack.|
|56|INITSSLOT|-|-|-|Initialize the static field list for the current execution context.|
|57|INITSLOT|-|-|-|Initialize the argument slot and the local variable list for the current execution context.|
|58|LDSFLD0|-|a,|-|Loads the static field at index 0 onto the evaluation stack.|
|59|LDSFLD1|-|a,|-|Loads the static field at index 1 onto the evaluation stack.|
|5A|LDSFLD2|-|a,|-|Loads the static field at index 2 onto the evaluation stack.|
|5B|LDSFLD3|-|a,|-|Loads the static field at index 3 onto the evaluation stack.|
|5C|LDSFLD4|-|a,|-|Loads the static field at index 4 onto the evaluation stack.|
|5D|LDSFLD5|-|a,|-|Loads the static field at index 5 onto the evaluation stack.|
|5E|LDSFLD6|-|a,|-|Loads the static field at index 6 onto the evaluation stack.|
|5F|LDSFLD|-|a,|-|Loads the static field at a specified index onto the evaluation stack. The index is represented as a 1-byte unsigned integer.|
|60|STSFLD0|-, a,|-,|-|Stores the value on top of the evaluation stack in the static field list at index 0.|
|61|STSFLD1|-, a, -,|-, -,|-|Stores the value on top of the evaluation stack in the static field list at index 1.|
|62|STSFLD2|-, a, -,|-, -,|-|Stores the value on top of the evaluation stack in the static field list at index 2.|
|63|STSFLD3|-, a, -,|-, -,|-|Stores the value on top of the evaluation stack in the static field list at index 0.|
|64|STSFLD4|-, a, -,|-, -,|-|Stores the value on top of the evaluation stack in the static field list at index 4.|
|65|STSFLD5|-, a, -,|-, -,|-|Stores the value on top of the evaluation stack in the static field list at index 5.|
|66|STSFLD6|-, a, -,|-, -,|-|Stores the value on top of the evaluation stack in the static field list at index 6.|
|67|STSFLD|-, a, -,|-, -,|-|Stores the value on top of the evaluation stack in the static field list at a specified index. The index is represented as a 1-byte unsigned integer.|
|68|LDLOC0|-|a,|-|Loads the local variable at index 0 onto the evaluation stack.|
|69|LDLOC1|-|a,|-|Loads the local variable at index 1 onto the evaluation stack.|
|6A|LDLOC2|-|a,|-|Loads the local variable at index 2 onto the evaluation stack.|
|6B|LDLOC3|-|a,|-|Loads the local variable at index 3 onto the evaluation stack.|
|6C|LDLOC4|-|a,|-|Loads the local variable at index 4 onto the evaluation stack.|
|6D|LDLOC5|-|a,|-|Loads the local variable at index 5 onto the evaluation stack.|
|6E|LDLOC6|-|a,|-|Loads the local variable at index 7 onto the evaluation stack.|
|6F|LDLOC|-|a,|-|Loads the local variable at a specified index onto the evaluation stack. The index is represented as a 1-byte unsigned integer.|
|70|STLOC0|-|a,|-|Stores the value on top of the evaluation stack in the local variable list at index 0.|
|71|STLOC1|-|-, a, -,|-|Stores the value on top of the evaluation stack in the local variable list at index 1.|
|72|STLOC2|-|-, a, -,|-|Stores the value on top of the evaluation stack in the local variable list at index 2.|
|73|STLOC3|-|-, a, -,|-|Stores the value on top of the evaluation stack in the local variable list at index 3.|
|74|STLOC4|-|-, a, -,|-|Stores the value on top of the evaluation stack in the local variable list at index 4.|
|75|STLOC5|-|-, a, -,|-|Stores the value on top of the evaluation stack in the local variable list at index 5.|
|76|STLOC6|-|-, a, -,|-|Stores the value on top of the evaluation stack in the local variable list at index 6.|
|77|STLOC|-|-, a, -,|-|Stores the value on top of the evaluation stack in the local variable list at a specified index. The index is represented as a 1-byte unsigned integer.|
|78|LDARG0|-|a,|-|Loads the argument at index 0 onto the evaluation stack.|
|79|LDARG1|-|a,|-|Loads the argument at index 1 onto the evaluation stack.|
|7A|LDARG2|-|a,|-|Loads the argument at index 2 onto the evaluation stack.|
|7B|LDARG3|-|a,|-|Loads the argument at index 3 onto the evaluation stack.|
|7C|LDARG4|-|a,|-|Loads the argument at index 4 onto the evaluation stack.|
|7D|LDARG5|-|a,|-|Loads the argument at index 5 onto the evaluation stack.|
|7E|LDARG6|-|a,|-|Loads the argument at index 6 onto the evaluation stack.|
|7F|LDARG|-|a,|-|Loads the argument at a specified index onto the evaluation stack. The index is represented as a 1-byte unsigned integer.|
|80|STARG0|a,|-|-|Stores the value on top of the evaluation stack in the argument slot at index 0.|
|81|STARG1|-, a, -,|-|-|Stores the value on top of the evaluation stack in the argument slot at index 1.|
|82|STARG2|-, a, -,|-|-|Stores the value on top of the evaluation stack in the argument slot at index 2.|
|83|STARG3|-, a, -,|-|-|Stores the value on top of the evaluation stack in the argument slot at index 3.|
|84|STARG4|-, a, -,|-|-|Stores the value on top of the evaluation stack in the argument slot at index 4.|
|85|STARG5|-, a, -,|-|-|Stores the value on top of the evaluation stack in the argument slot at index 5.|
|86|STARG6|-, a, -,|-|-|Stores the value on top of the evaluation stack in the argument slot at index 6.|
|87|STARG|-, a, -,|-|-|Stores the value on top of the evaluation stack in the argument slot at a specified index. The index is represented as a 1-byte unsigned integer.|
|88|NEWBUFFER|-|a,|new Buffer(a)|Creates a new Buffer and pushes it onto the stack.|
|89|MEMCPY|e, d, c, b, a,|-|c.Slice(d, e).CopyTo(a.InnerBuffer.Span[b..])|Copies a range of bytes from one Buffer to another. Using this opcode will require to dup the destination buffer.|
|8B|CAT|b, a,|a.Concat(b),|a.Concat(b)|Concatenates two strings.|
|8C|SUBSTR|c, b, a,|a.Slice(b, c),|a.Slice(b, c)|Concatenates two strings.|
|8D|LEFT|b, a,|a[..b],|a[..b]|Keeps only characters left of the specified point in a string.|
|90|INVERT|a,|~a,|~a|Flips all the bits in the input.|
|91|AND|b, a,|a&b,|a&b|Boolean and between each bit in the inputs.|
|92|OR|b, a,|a|b,|a|b|Boolean or between each bit in the inputs.|
|93|XOR|b, a,|a^b,|a^b|Boolean exclusive or between each bit in the inputs.|
|97|EQUAL|b, a,|a.Equals(b),|a.Equals(b)|Returns 1 if the inputs are exactly equal, 0 otherwise.|
|98|NOTEQUAL|b, a,|!a.Equals(b),|!a.Equals(b)|Returns 1 if the inputs are not equal, 0 otherwise.|
|99|SIGN|a,|a.Sign,|a.Sign|Puts the sign of top stack item on top of the main stack. If value is negative, put -1; if positive, put 1; if value is zero, put 0.|
|9A|ABS|a,|abs(a),|abs(a)|The input is made positive.|
|9B|NEGATE|a,|-a,|-a|The sign of the input is flipped.|
|9C|INC|a,|a+1,|a+1|1 is added to the input.|
|9D|DEC|a,|a-1,|a-1|1 is subtracted from the input.|
|9E|ADD|b, a,|a+b,|a+b|a is added to b.|
|9F|SUB|b, a,|a-b,|a-b|b is subtracted from a.|
|A0|MUL|b, a,|a*b,|a*b|a is multiplied by b.|
|A1|DIV|b, a,|a/b,|a/b|a is divided by b.|
|A2|MOD|b, a,|a%b,|a%b|Returns the remainder after dividing a by b.|
|A3|POW|b, a,|a^b,|a^b|The result of raising value to the exponent power.|
|A4|SQRT|a,|sqrt(a),|sqrt(a)|Returns the square root of a specified number.|
|A5|MODMUL|c, b, a,|a*b%c,|a*b%c|Performs modulus division on a number multiplied by another number.|
|A6|MODPOW|c, b, a,|modpow(a, b, c),|modpow(a, b, c)|Performs modulus division on a number raised to the power of another number. If the exponent is -1, it will have the calculation of the modular inverse.|
|A8|SHL|b, a,|a << b,|a << b|Shifts a left b bits, preserving sign.|
|A9|SHR|b, a,|a >> b,|a << b|Shifts a right b bits, preserving sign.|
|AA|NOT|a,|!a,|!a|If the input is 0 or 1, it is flipped. Otherwise, the output will be 0.|
|AB|BOOLAND|b, a,|a && b,|a && b|If both a and b are not 0, the output is 1. Otherwise, 0.|
|AC|BOOLOR|b, a,|a || b,|a || b|If a or b is not 0, the output is 1. Otherwise, 0.|
|B1|NZ|a,|a != 0,|a != 0|If a or b is not 0, the output is 1. Otherwise, 0.|
|B3|NUMEQUAL|b, a,|b == a,|b == a|Returns 1 if the numbers are equal, 0 otherwise.|
|B4|NUMNOTEQUAL|b, a,|b != a,|b != a|Returns 1 if the numbers are not equal, 0 otherwise.|
|B5|LT|b, a,|a < b,|a < b|Returns 1 if a is less than b, 0 otherwise.|
|B6|LE|b, a,|a ≤ b,|a <= b|Returns 1 if a is less than or equal to b, 0 otherwise.|
|B7|GT|b, a,|a > b,|a > b|Returns 1 if a is greater than b, 0 otherwise.|
|B8|GE|b, a,|a ≥ b,|a >= b|Returns 1 if a is greater than or equal to b, 0 otherwise.|
|B9|MIN|b, a,|min(a, b),|-|Returns the smallest of a and b.|
|BA|MAX|b, a,|max(a, b),|-|Returns the largest of a and b.|
|BB|WITHIN|b, a, x,|a ≤ x < b,|-|Returns 1 if x is within the specified range (left-inclusive), 0 otherwise.|
|BE|PACKMAP|item, ..., item,|map,|-|A value n is taken from top of main stack. The next n*2 items on main stack are removed, put inside n-sized map and this map is put on top of the main stack.|
|BF|PACKSTRUCT|item, ..., item,|struct,|-|A value n is taken from top of main stack. The next n items on main stack are removed, put inside n-sized struct and this struct is put on top of the main stack.|
|C0|PACK|item, ..., item,|array,|-|A value n is taken from top of main stack. The next n items on main stack are removed, put inside n-sized array and this array is put on top of the main stack.|
|C1|UNPACK|collection,|item, ..., item,|-|A collection is removed from top of the main stack. Its elements are put on top of the main stack (in reverse order) and the collection size is also put on main stack.|
|C2|NEWARRAY0|-|new Array[0],|-|An empty array (with size 0) is put on top of the main stack.|
|C3|NEWARRAY|n,|new Array\[n\],|-|A value n is taken from top of main stack. A null-filled array with size n is put on top of the main stack.|
|C4|NEWARRAY_T|T,|new T\[n\],|-|A value n is taken from top of main stack. An array of type T with size n is put on top of the main stack.|
|C5|NEWSTRUCT0|-|empty struct,|-|An empty struct (with size 0) is put on top of the main stack.|
|C6|NEWSTRUCT|n,|zero-filled struct with size n,|-|A value n is taken from top of main stack. A zero-filled struct with size n is put on top of the main stack.|
|C8|NEWMAP|-|new Map(),|-|A Map is created and put on top of the main stack.|
|CA|SIZE|a,|sizeof(a),|-|An array is removed from top of the main stack. Its size is put on top of the main stack.|
|CB|HASKEY|array, n,|True/False,|-|An input index n (or key) and an array (or map) are removed from the top of the main stack. Puts True on top of main stack if array\[n\] (or map\[n\]) exist, and False otherwise.|
|CC|KEYS|map,|keys,|-|A map is taken from top of the main stack. The keys of this map are put on top of the main stack.|
|CD|VALUES|map,|values,|-|A map is taken from top of the main stack. The values of this map are put on top of the main stack.|
|CE|PICKITEM|array, n,|array\[n\],|-|An input index n (or key) and an array (or map) are taken from main stack. Element array\[n\] (or map\[n\]) is put on top of the main stack.|
|CF|APPEND|b, a,|a.concat(b),|-|The item on top of main stack is removed and appended to the second item on top of the main stack.|
|D0|SETITEM|array, n, v,|array (array\[n\]=v),|-|A value v, index n (or key) and an array (or map) are taken from main stack. Attribution array\[n\]=v (or map\[n\]=v) is performed.|
|D1|REVERSEITEMS|array,|-|-|An array is removed from the top of the main stack and its elements are reversed.|
|D2|REMOVE|array, n,|-|-|An input index n (or key) and an array (or map) are removed from the top of the main stack. Element array\[n\] (or map\[n\]) is removed.|
|D3|CLEARITEMS|items,|-|-|Remove all the items from the compound-type.|
|D4|POPITEM|array,|array[i],|-|Remove the last element from an array, and push it onto the stack.|
|D8|ISNULL|a,|a == null,|-|Returns true if the input is null;|
|D9|ISTYPE|a,|a is T,|-|Returns true if the top item of the stack is of the specified type;|
|DB|CONVERT|a,|(T)a,|-|Converts the top item of the stack to the specified type.|
|E0|ABORTMSG|a,|-|-|Pops the top stack item. Then, turns the vm state to FAULT immediately, and cannot be caught. The top stack|
|E1|ASSERTMSG|b, a,|-|-|Pops the top two stack items. If the second-to-top stack value is false, exits the vm execution and sets the vm state to FAULT. In this case, the top stack value is used as reason for the exit. Otherwise, it is ignored.|


## Reference

Definition of OpCodes in Neo https://github.com/neo-project/neo/blob/master/src/Neo.VM/OpCode.cs

OpCodes implementation in NeoVM: https://github.com/neo-project/neo/tree/master/src/Neo.VM/JumpTable

